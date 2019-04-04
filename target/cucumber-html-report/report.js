$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("fbwithexamples.feature");
formatter.feature({
  "line": 1,
  "name": "Automation of facebook",
  "description": "",
  "id": "automation-of-facebook",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "facebook login page with valid credentials",
  "description": "",
  "id": "automation-of-facebook;facebook-login-page-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Open user account sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "logout user account",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "automation-of-facebook;facebook-login-page-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "automation-of-facebook;facebook-login-page-with-valid-credentials;;1"
    },
    {
      "cells": [
        "mukesh@gmail.com",
        "password1"
      ],
      "line": 14,
      "id": "automation-of-facebook;facebook-login-page-with-valid-credentials;;2"
    },
    {
      "cells": [
        "siri.sirisha.m@gmail.com",
        "141001410"
      ],
      "line": 15,
      "id": "automation-of-facebook;facebook-login-page-with-valid-credentials;;3"
    },
    {
      "cells": [
        "rudratejas@gmail.com",
        "8352795111"
      ],
      "line": 16,
      "id": "automation-of-facebook;facebook-login-page-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "facebook login page with valid credentials",
  "description": "",
  "id": "automation-of-facebook;facebook-login-page-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter valid \"mukesh@gmail.com\" and \"password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Open user account sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "logout user account",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepclass.user_open_chrome_browser()"
});
formatter.result({
  "duration": 15980903209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mukesh@gmail.com",
      "offset": 13
    },
    {
      "val": "password1",
      "offset": 36
    }
  ],
  "location": "Stepclass.enter_valid_and(String,String)"
});
formatter.result({
  "duration": 619845411,
  "status": "passed"
});
formatter.match({
  "location": "Stepclass.open_user_account_sucessfully()"
});
formatter.result({
  "duration": 28225,
  "status": "passed"
});
formatter.match({
  "location": "Stepclass.logout_user_account()"
});
formatter.result({
  "duration": 3919482801,
  "status": "passed"
});
formatter.match({
  "location": "Stepclass.close_browser()"
});
formatter.result({
  "duration": 2316795919,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "facebook login page with valid credentials",
  "description": "",
  "id": "automation-of-facebook;facebook-login-page-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter valid \"siri.sirisha.m@gmail.com\" and \"141001410\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Open user account sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "logout user account",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepclass.user_open_chrome_browser()"
});
formatter.result({
  "duration": 11015623108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siri.sirisha.m@gmail.com",
      "offset": 13
    },
    {
      "val": "141001410",
      "offset": 44
    }
  ],
  "location": "Stepclass.enter_valid_and(String,String)"
});
formatter.result({
  "duration": 456278494,
  "status": "passed"
});
formatter.match({
  "location": "Stepclass.open_user_account_sucessfully()"
});
formatter.result({
  "duration": 16422,
  "status": "passed"
});
formatter.match({
  "location": "Stepclass.logout_user_account()"
});
formatter.result({
  "duration": 8005843527,
  "status": "passed"
});
formatter.match({
  "location": "Stepclass.close_browser()"
});
formatter.result({
  "duration": 2143985175,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "facebook login page with valid credentials",
  "description": "",
  "id": "automation-of-facebook;facebook-login-page-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter valid \"rudratejas@gmail.com\" and \"8352795111\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Open user account sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "logout user account",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepclass.user_open_chrome_browser()"
});
formatter.result({
  "duration": 10705592892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rudratejas@gmail.com",
      "offset": 13
    },
    {
      "val": "8352795111",
      "offset": 40
    }
  ],
  "location": "Stepclass.enter_valid_and(String,String)"
});
formatter.result({
  "duration": 448362252,
  "status": "passed"
});
formatter.match({
  "location": "Stepclass.open_user_account_sucessfully()"
});
formatter.result({
  "duration": 26172,
  "status": "passed"
});
formatter.match({
  "location": "Stepclass.logout_user_account()"
});
formatter.result({
  "duration": 1476604339,
  "status": "passed"
});
formatter.match({
  "location": "Stepclass.close_browser()"
});
formatter.result({
  "duration": 2315049070,
  "status": "passed"
});
});