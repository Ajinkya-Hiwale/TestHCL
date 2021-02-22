package pages;

import io.cucumber.core.internal.gherkin.deps.com.google.gson.Gson;
import io.restassured.RestAssured;
import io.restassured.http.Headers;
import io.restassured.path.json.JsonPath;
import stepDefinitions.Utility;

import static io.restassured.RestAssured.given;

import java.io.IOException;
import java.io.StringReader;

import io.restassured.response.Response;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import baseClass.TestBase;

public class ServiceWeatherPage {

	Utility utility = new Utility();

	/*
	 * GET Request This method will return service response base provided parameters
	 */

	public Response getWeatherDataResponse(String baseURI, String endpoint, String apiKey, String filename)
			throws IOException {

		RestAssured.reset();
		RestAssured.useRelaxedHTTPSValidation();

		RestAssured.baseURI = baseURI;
		Response res = RestAssured.given()

				.queryParam("APPID", apiKey).header("Content-Type", "application/json")

				.when().get(endpoint).then().extract().response();
		return res;

	}

	public Response postRegisterStation(String baseURI, String endpoint, String apiKey, String filename)
			throws IOException {

		RestAssured.reset();
		RestAssured.useRelaxedHTTPSValidation();

		RestAssured.baseURI = baseURI;
		Response res = RestAssured.given().body(payload.input(filename)).queryParam("APPID", apiKey)
				.header("Content-Type", "application/json")

				.when().post(endpoint).then().extract().response();
		return res;

	}

	public Response postWeatherDataResponseWithParas(String baseURI, String endpoint, String apiKey, String city)
			throws JsonMappingException, JsonProcessingException {

		RestAssured.reset();
		RestAssured.useRelaxedHTTPSValidation();

		Response res = RestAssured.given().baseUri(baseURI).queryParam("appid", apiKey).queryParam("q", city)
				.header("Key", "Value").header("Key", "Value").cookie("Key", "Value").body("body").when().post(endpoint)
				.then().extract().response();
		return res;

	}
	
	public Response deleteWeatherStation(String baseURI, String endpoint, String apiKey, String id)
			throws JsonMappingException, JsonProcessingException {

		RestAssured.reset();
		RestAssured.useRelaxedHTTPSValidation();

		RestAssured.baseURI = baseURI;
		Response res = RestAssured.given().queryParam("APPID", apiKey)
				.header("Content-Type", "application/json")

				.when().delete(endpoint+"/"+id).then().extract().response();
		return res;

	}
	
	

	public void verifyResponseWithRegistrationValues(String response, String input) {
		JsonPath jsonpath = new JsonPath(response);
		int flag = 0;
		int size = jsonpath.getInt("id.size()");
		for (int i = 0; i < size; i++) {
			String id = jsonpath.get("external_id[" + i + "]");
			String name = jsonpath.get("name[" + i + "]");

			if ((payload.input(input).contains(id))) {
				if (payload.input(input).contains(name)) {
					flag++;
				}
			}

		}
		if (flag >= 1) {
			Assert.assertTrue(true);
		} else {
			Assert.assertTrue(false);
		}
	}

}
