package stepDefinitions;

import java.io.IOException;

import org.apache.log4j.Logger;
import org.testng.Assert;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

import baseClass.TestBase;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import pages.ServiceWeatherPage;
import pages.payload;

public class ServicesWeatherStpeDef extends TestBase {

	ServiceWeatherPage serivcepage = new ServiceWeatherPage();
	Logger log=Hooks.logger;

	public ServicesWeatherStpeDef() throws IOException {
		super();
		
	}

	Response response;
	String baseURI;
	String endpoint;
	String apikey;
	String file;
	JsonPath jsonpath;

	@Given("Setting up Rest APi ELements like {string},{string},{string},{string}")
	public void setting_up_Rest_APi_ELements_like(String baseuri, String endPoint, String apikeyy, String filename) {
		
		log.info("Setting up data to hit weather web service");
		baseURI = TestBase.getPropertyValue(baseuri);
		endpoint = TestBase.getPropertyValue(endPoint);
		apikey = TestBase.getPropertyValue(apikeyy);
		file = filename;
	}

	
	@When("Calling  Weather API to register to the station")
	public void calling_Weather_API_to_register_to_the_station() throws IOException {
		   
		log.info("Calling web service to register the station");
		response = serivcepage.postRegisterStation(baseURI, endpoint, apikey,file);
		jsonpath=new JsonPath(response.getBody().asString());
		
		
	}
	
	@When("Calling  Weather API to get the station details {string}")
	public void calling_Weather_API_to_get_the_station_details(String input) throws IOException {
		   
		log.info("Calling web service to get the station details");
		response = serivcepage.getWeatherDataResponse(baseURI, endpoint, apikey,file);
		
		
	}

	
	@When("Calling API to delete the station")
	public void Calling_API_to_delete_the_station() throws IOException {
		 
		
		log.info("Calling web service to delete the station");
		response = serivcepage.deleteWeatherStation(baseURI, endpoint, apikey,jsonpath.getString("ID"));
		
		
	}
	
	@Then("verify if station is deleted {string}")
	public void verify_if_station_is_deleted(String responsecode) {
	    
		Assert.assertEquals(String.valueOf(response.getStatusCode()), responsecode);
	}
	
	@Then("verify if station deleted {string}")
	public void verify_if_station_deleted(String responsecode) {
		jsonpath=new JsonPath(response.getBody().asString());
	   
		Assert.assertEquals(String.valueOf(response.getStatusCode()), responsecode);
		Assert.assertEquals(jsonpath.get("message"), "Station not found");
		
	}
	
	@When("verify values use in registration {string}")
	public void verify_values_use_in_registration(String input) throws IOException {
		   
		serivcepage.verifyResponseWithRegistrationValues(response.getBody().asString(), input);
		
		
	}
	
	
	@Then("Verify the error response {string}")
	public void verify_the_error_response(String responsecode) {
	    Assert.assertEquals(String.valueOf(response.getStatusCode()), responsecode);
	    jsonpath=new JsonPath(response.getBody().asString());
	    String message=jsonpath.get("message");
	    Assert.assertTrue(message.contains(TestBase.getPropertyValue("errormessage")));
	}

	
	@Then("Verify the response upon succesful resgistration {string}")
	public void verify_the_response_upon_succesful_resgistration(String responsecode) {
	    log.info("REGISTER SUCCESFULLY ");
		Assert.assertEquals(String.valueOf(response.getStatusCode()), responsecode);
		
	}

	@Then("Verify if weather data is getting fetched from the API")
	public void verify_if_weather_data_is_getting_fetched_from_the_API()
			throws JsonMappingException, JsonProcessingException {

		
		if (response.getBody().asString().equals(" ")) {
			log.info("No Data in Response");
			Assert.assertTrue(false);
			
		}
	}

	@Then("Verify status code should be {string}")
	public void verify_status_code_should_be(String statuscode) {

		Assert.assertEquals(String.valueOf(response.getStatusCode()), statuscode);
		
	}
	
	@Then("Verify content type of the response {string}")
	public void verify_content_type_of_the_response(String content_type) {
		//log.info(response.getContentType());
		Assert.assertTrue(response.getContentType().contains(TestBase.getPropertyValue(content_type)));
	}

}
