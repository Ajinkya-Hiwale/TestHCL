@RegressionSuite
Feature: OpenWeather API

@StationValidation
Scenario Outline: To check the response and error code upon registering station without api key
Given Setting up Rest APi ELements like "<baseURI>","<endPoint>","<apiKey>","<filename>"
When Calling  Weather API to register to the station
Then Verify the error response "<responsecode>"

Examples:
|baseURI|endPoint|apiKey|filename|responsecode|
|baseURI|endPoint||input1|401|

@StationValidation
Scenario Outline: Register the two stations 
Given Setting up Rest APi ELements like "<baseURI>","<endPoint>","<apiKey>","<filename>"
When Calling  Weather API to register to the station
Then Verify the response upon succesful resgistration "<responsecode>"

Examples:
|baseURI|endPoint|apiKey|filename|responsecode|
|baseURI|endPoint|apiKey|input1|201|
|baseURI|endPoint|apiKey|input2|201|

@StationValidation
Scenario Outline: Verify if stations were successfully stored and verify values with the values mentioned during registration
Given Setting up Rest APi ELements like "<baseURI>","<endPoint>","<apiKey>","<filename>"
When Calling  Weather API to get the station details "<filename>"
Then verify values use in registration "<filename>"

Examples:
|baseURI|endPoint|apiKey|filename|responsecode|filename|
|baseURI|endPoint|apiKey|input1|201|input1|
|baseURI|endPoint|apiKey|input2|201|input2|

@StationValidation
Scenario Outline: Delete the Registered the stations 
Given Setting up Rest APi ELements like "<baseURI>","<endPoint>","<apiKey>","<filename>"
When Calling  Weather API to register to the station
When Calling API to delete the station
Then verify if station is deleted "<responsecode>"
Examples:
|baseURI|endPoint|apiKey|filename|responsecode|
|baseURI|endPoint|apiKey|input1|204|
|baseURI|endPoint|apiKey|input2|204|


@StationValidation
Scenario Outline: Delete the Already deleted stations 
Given Setting up Rest APi ELements like "<baseURI>","<endPoint>","<apiKey>","<filename>"
When Calling  Weather API to register to the station
When Calling API to delete the station
When Calling API to delete the station
Then verify if station deleted "<responsecode>"
Examples:
|baseURI|endPoint|apiKey|filename|responsecode|
|baseURI|endPoint|apiKey|input1|404|
|baseURI|endPoint|apiKey|input2|404|