$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/StationValidationAPI.feature");
formatter.feature({
  "name": "OpenWeather API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@RegressionSuite"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To check the response and error code upon registering station without api key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@StationValidation"
    }
  ]
});
formatter.step({
  "name": "Setting up Rest APi ELements like \"\u003cbaseURI\u003e\",\"\u003cendPoint\u003e\",\"\u003capiKey\u003e\",\"\u003cfilename\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Calling  Weather API to register to the station",
  "keyword": "When "
});
formatter.step({
  "name": "Verify the error response \"\u003cresponsecode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "baseURI",
        "endPoint",
        "apiKey",
        "filename",
        "responsecode"
      ]
    },
    {
      "cells": [
        "baseURI",
        "endPoint",
        "",
        "input1",
        "401"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To check the response and error code upon registering station without api key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionSuite"
    },
    {
      "name": "@StationValidation"
    }
  ]
});
formatter.step({
  "name": "Setting up Rest APi ELements like \"baseURI\",\"endPoint\",\"\",\"input1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.setting_up_Rest_APi_ELements_like(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Calling  Weather API to register to the station",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.calling_Weather_API_to_register_to_the_station()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the error response \"401\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.verify_the_error_response(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Register the two stations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@StationValidation"
    }
  ]
});
formatter.step({
  "name": "Setting up Rest APi ELements like \"\u003cbaseURI\u003e\",\"\u003cendPoint\u003e\",\"\u003capiKey\u003e\",\"\u003cfilename\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Calling  Weather API to register to the station",
  "keyword": "When "
});
formatter.step({
  "name": "Verify the response upon succesful resgistration \"\u003cresponsecode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "baseURI",
        "endPoint",
        "apiKey",
        "filename",
        "responsecode"
      ]
    },
    {
      "cells": [
        "baseURI",
        "endPoint",
        "apiKey",
        "input1",
        "201"
      ]
    },
    {
      "cells": [
        "baseURI",
        "endPoint",
        "apiKey",
        "input2",
        "201"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Register the two stations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionSuite"
    },
    {
      "name": "@StationValidation"
    }
  ]
});
formatter.step({
  "name": "Setting up Rest APi ELements like \"baseURI\",\"endPoint\",\"apiKey\",\"input1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.setting_up_Rest_APi_ELements_like(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Calling  Weather API to register to the station",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.calling_Weather_API_to_register_to_the_station()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the response upon succesful resgistration \"201\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.verify_the_response_upon_succesful_resgistration(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register the two stations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionSuite"
    },
    {
      "name": "@StationValidation"
    }
  ]
});
formatter.step({
  "name": "Setting up Rest APi ELements like \"baseURI\",\"endPoint\",\"apiKey\",\"input2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.setting_up_Rest_APi_ELements_like(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Calling  Weather API to register to the station",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.calling_Weather_API_to_register_to_the_station()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the response upon succesful resgistration \"201\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.verify_the_response_upon_succesful_resgistration(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if stations were successfully stored and verify values with the values mentioned during registration",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@StationValidation"
    }
  ]
});
formatter.step({
  "name": "Setting up Rest APi ELements like \"\u003cbaseURI\u003e\",\"\u003cendPoint\u003e\",\"\u003capiKey\u003e\",\"\u003cfilename\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Calling  Weather API to get the station details \"\u003cfilename\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "verify values use in registration \"\u003cfilename\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "baseURI",
        "endPoint",
        "apiKey",
        "filename",
        "responsecode",
        "filename"
      ]
    },
    {
      "cells": [
        "baseURI",
        "endPoint",
        "apiKey",
        "input1",
        "201",
        "input1"
      ]
    },
    {
      "cells": [
        "baseURI",
        "endPoint",
        "apiKey",
        "input2",
        "201",
        "input2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if stations were successfully stored and verify values with the values mentioned during registration",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionSuite"
    },
    {
      "name": "@StationValidation"
    }
  ]
});
formatter.step({
  "name": "Setting up Rest APi ELements like \"baseURI\",\"endPoint\",\"apiKey\",\"input1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.setting_up_Rest_APi_ELements_like(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Calling  Weather API to get the station details \"input1\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.calling_Weather_API_to_get_the_station_details(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify values use in registration \"input1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.verify_values_use_in_registration(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if stations were successfully stored and verify values with the values mentioned during registration",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionSuite"
    },
    {
      "name": "@StationValidation"
    }
  ]
});
formatter.step({
  "name": "Setting up Rest APi ELements like \"baseURI\",\"endPoint\",\"apiKey\",\"input2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.setting_up_Rest_APi_ELements_like(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Calling  Weather API to get the station details \"input2\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.calling_Weather_API_to_get_the_station_details(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify values use in registration \"input2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.verify_values_use_in_registration(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Delete the Registered the stations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@StationValidation"
    }
  ]
});
formatter.step({
  "name": "Setting up Rest APi ELements like \"\u003cbaseURI\u003e\",\"\u003cendPoint\u003e\",\"\u003capiKey\u003e\",\"\u003cfilename\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Calling  Weather API to register to the station",
  "keyword": "When "
});
formatter.step({
  "name": "Calling API to delete the station",
  "keyword": "When "
});
formatter.step({
  "name": "verify if station is deleted \"\u003cresponsecode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "baseURI",
        "endPoint",
        "apiKey",
        "filename",
        "responsecode"
      ]
    },
    {
      "cells": [
        "baseURI",
        "endPoint",
        "apiKey",
        "input1",
        "204"
      ]
    },
    {
      "cells": [
        "baseURI",
        "endPoint",
        "apiKey",
        "input2",
        "204"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Delete the Registered the stations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionSuite"
    },
    {
      "name": "@StationValidation"
    }
  ]
});
formatter.step({
  "name": "Setting up Rest APi ELements like \"baseURI\",\"endPoint\",\"apiKey\",\"input1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.setting_up_Rest_APi_ELements_like(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Calling  Weather API to register to the station",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.calling_Weather_API_to_register_to_the_station()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Calling API to delete the station",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.Calling_API_to_delete_the_station()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify if station is deleted \"204\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.verify_if_station_is_deleted(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete the Registered the stations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionSuite"
    },
    {
      "name": "@StationValidation"
    }
  ]
});
formatter.step({
  "name": "Setting up Rest APi ELements like \"baseURI\",\"endPoint\",\"apiKey\",\"input2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.setting_up_Rest_APi_ELements_like(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Calling  Weather API to register to the station",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.calling_Weather_API_to_register_to_the_station()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Calling API to delete the station",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.Calling_API_to_delete_the_station()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify if station is deleted \"204\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.verify_if_station_is_deleted(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Delete the Already deleted stations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@StationValidation"
    }
  ]
});
formatter.step({
  "name": "Setting up Rest APi ELements like \"\u003cbaseURI\u003e\",\"\u003cendPoint\u003e\",\"\u003capiKey\u003e\",\"\u003cfilename\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Calling  Weather API to register to the station",
  "keyword": "When "
});
formatter.step({
  "name": "Calling API to delete the station",
  "keyword": "When "
});
formatter.step({
  "name": "Calling API to delete the station",
  "keyword": "When "
});
formatter.step({
  "name": "verify if station deleted \"\u003cresponsecode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "baseURI",
        "endPoint",
        "apiKey",
        "filename",
        "responsecode"
      ]
    },
    {
      "cells": [
        "baseURI",
        "endPoint",
        "apiKey",
        "input1",
        "404"
      ]
    },
    {
      "cells": [
        "baseURI",
        "endPoint",
        "apiKey",
        "input2",
        "404"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Delete the Already deleted stations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionSuite"
    },
    {
      "name": "@StationValidation"
    }
  ]
});
formatter.step({
  "name": "Setting up Rest APi ELements like \"baseURI\",\"endPoint\",\"apiKey\",\"input1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.setting_up_Rest_APi_ELements_like(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Calling  Weather API to register to the station",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.calling_Weather_API_to_register_to_the_station()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Calling API to delete the station",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.Calling_API_to_delete_the_station()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Calling API to delete the station",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.Calling_API_to_delete_the_station()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify if station deleted \"404\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.verify_if_station_deleted(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete the Already deleted stations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionSuite"
    },
    {
      "name": "@StationValidation"
    }
  ]
});
formatter.step({
  "name": "Setting up Rest APi ELements like \"baseURI\",\"endPoint\",\"apiKey\",\"input2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.setting_up_Rest_APi_ELements_like(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Calling  Weather API to register to the station",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.calling_Weather_API_to_register_to_the_station()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Calling API to delete the station",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.Calling_API_to_delete_the_station()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Calling API to delete the station",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.Calling_API_to_delete_the_station()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify if station deleted \"404\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ServicesWeatherStpeDef.verify_if_station_deleted(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/VerifyProductDetailsUI.feature");
formatter.feature({
  "name": "Verify the product details",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@RegressionSuite"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To verify if all prodcut detaila are correct",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@verifyproductdetails"
    }
  ]
});
formatter.step({
  "name": "Launch \"\u003curl\u003e\" automation practice website",
  "keyword": "Given "
});
formatter.step({
  "name": "USer Enter the credentials as \"\u003cUSerid\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Select the category \"\u003cCategory\u003e\",\"\u003cproduct\u003e\" and add to cart and proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "name": "verify the message \"\u003cmessage\u003e\" and other product details such as product name,color,quantity and totoal price",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url",
        "USerid",
        "password",
        "Category",
        "product",
        "message"
      ]
    },
    {
      "cells": [
        "url",
        "jetblue@grr.la",
        "jetblue",
        "T-Shirts",
        "Faded Short Sleeve T-shirts",
        "message"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify if all prodcut detaila are correct",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionSuite"
    },
    {
      "name": "@verifyproductdetails"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch \"url\" automation practice website",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ProductDetailsStepDef.launch_automation_practice_website(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "USer Enter the credentials as \"jetblue@grr.la\" and \"jetblue\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ProductDetailsStepDef.user_Enter_the_credentials_as_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the category \"T-Shirts\",\"Faded Short Sleeve T-shirts\" and add to cart and proceed to checkout",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ProductDetailsStepDef.select_the_category_and_add_to_cart_and_proceed_to_checkout(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the message \"message\" and other product details such as product name,color,quantity and totoal price",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ProductDetailsStepDef.verify_the_message_and_other_product_details_such_as_product_name_color_quantity_and_totoal_price(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});