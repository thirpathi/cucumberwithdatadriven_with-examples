package runnerclass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="fb_withvalues", glue = "stepdefinationfile")






public class Runnerclass {

}


/*plugin = {"html:target/cucumber-html-report"}
*/