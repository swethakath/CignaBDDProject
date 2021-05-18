package StepDefinition;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CignaHomePageStepDef1 
{
	
	@Given("^User open the browser$")
	public void user_open_the_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  System.out.println("User Open the browser");
	}

	@When("^User enters the url$")
	public void user_enters_the_url() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   System.out.println("User enters the url");
	}

	@Then("^Homepage is displayed$")
	public void homepage_is_displayed() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   System.out.println("HomePage is displayed");
	   Assert.fail("Homepage is not displayed");
	}

	@When("^User refreshs the browser$")
	public void user_refreshs_the_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		   System.out.println("User Refresh the browser");
	}

	@Then("^Login page is displayed$")
	public void login_page_is_displayed() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		   System.out.println("Login page is displayed");
	}


}
