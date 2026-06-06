package com.serverest.tests;

import com.github.javafaker.Faker;
import io.restassured.RestAssured;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.Locale;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

public class LoginTest {

    private static Faker faker;

    @BeforeAll
    public static void setup() {
        RestAssured.baseURI = "https://serverest.dev";
        faker = new Faker(new Locale("en-US"));

        RestAssured.filters(
                new RequestLoggingFilter(),
                new ResponseLoggingFilter()
        );
    }

    @Test
    @DisplayName("TC001: Successful authentication with a dynamically registered admin user")
    public void testSuccessfulLoginWithValidAdminCredentials() {
        String fakeName = faker.name().fullName();
        String fakeEmail = faker.internet().emailAddress();
        String fakePassword = faker.internet().password();

        String registerPayload = """
                {
                  "nome": "%s",
                  "email": "%s",
                  "password": "%s",
                  "administrador": "true"
                }
                """.formatted(fakeName, fakeEmail, fakePassword);

        given()
                .contentType(ContentType.JSON)
                .body(registerPayload)
                .when()
                .post("/usuarios")
                .then()
                .statusCode(201);

        String loginPayload = """
                {
                  "email": "%s",
                  "password": "%s"
                }
                """.formatted(fakeEmail, fakePassword);

        given()
                .contentType(ContentType.JSON)
                .body(loginPayload)
                .when()
                .post("/login")
                .then()
                .statusCode(200)
                .body("message", equalTo("Login realizado com sucesso"));
    }

    @Test
    @DisplayName("TC002: Successful authentication with a dynamically registered non-admin user")
    public void testSuccessfulLoginWithValidNonAdminCredentials() {
        String fakeName = faker.name().fullName();
        String fakeEmail = faker.internet().emailAddress();
        String fakePassword = faker.internet().password();

        String registerPayload = """
                {
                  "nome": "%s",
                  "email": "%s",
                  "password": "%s",
                  "administrador": "false"
                }
                """.formatted(fakeName, fakeEmail, fakePassword);

        given()
                .contentType(ContentType.JSON)
                .body(registerPayload)
                .when()
                .post("/usuarios")
                .then()
                .statusCode(201);

        String loginPayload = """
                {
                  "email": "%s",
                  "password": "%s"
                }
                """.formatted(fakeEmail, fakePassword);

        given()
                .contentType(ContentType.JSON)
                .body(loginPayload)
                .when()
                .post("/login")
                .then()
                .statusCode(200)
                .body("message", equalTo("Login realizado com sucesso"));
    }

    @Test
    @DisplayName("TC003: Authentication blocked when using an unregistered email")
    public void testLoginBlockedForUnregisteredEmail() {
        String unregisteredEmail = faker.internet().emailAddress();
        String unregisteredPassword = faker.internet().password();

        String loginPayload = """
                {
                  "email": "%s",
                  "password": "%s"
                }
                """.formatted(unregisteredEmail, unregisteredPassword);

        given()
                .contentType(ContentType.JSON)
                .body(loginPayload)
                .when()
                .post("/login")
                .then()
                .statusCode(401)
                .body("message", equalTo("Email e/ou senha inválidos"));
    }

    @Test
    @DisplayName("TC004: Authentication rejected when required fields are completely empty")
    public void testLoginRejectedWithEmptyFields() {
        String loginPayload = """
                {
                  "email": "",
                  "password": ""
                }
                """;

        given()
                .contentType(ContentType.JSON)
                .body(loginPayload)
                .when()
                .post("/login")
                .then()
                .statusCode(400)
                .body("email", equalTo("email não pode ficar em branco"))
                .body("password", equalTo("password não pode ficar em branco"));
    }
}