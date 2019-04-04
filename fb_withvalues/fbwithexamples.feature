Feature: Automation of facebook 

Scenario Outline: facebook login page with valid credentials

			Given User open chrome browser
			When  Enter valid "<username>" and "<password>"
			Then Open user account sucessfully
			Then logout user account
			And  close browser

			
			Examples: 
			| username					|			password|
			|mukesh@gmail.com			|password1		|
			|siri.sirisha.m@gmail.com	|141001410      |
			|rudratejas@gmail.com       |8352795111     |