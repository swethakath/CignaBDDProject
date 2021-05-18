$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Lenovo/Documents/Swetha/Eclipse Projects/CignaBDD/src/test/resources/features/CignaLoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Cigna Login Page validation",
  "description": "",
  "id": "cigna-login-page-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Cigna Login Page URL Validation",
  "description": "",
  "id": "cigna-login-page-validation;cigna-login-page-url-validation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters the url",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User refreshs the browser",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Homepage is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Login page is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "CignaHomePageStepDef1.user_open_the_browser()"
});
formatter.result({
  "duration": 382586697,
  "status": "passed"
});
formatter.match({
  "location": "CignaHomePageStepDef1.user_enters_the_url()"
});
formatter.result({
  "duration": 218603,
  "status": "passed"
});
formatter.match({
  "location": "CignaHomePageStepDef1.user_refreshs_the_browser()"
});
formatter.result({
  "duration": 201669,
  "status": "passed"
});
formatter.match({
  "location": "CignaHomePageStepDef1.homepage_is_displayed()"
});
formatter.result({
  "duration": 33545778,
  "error_message": "java.lang.AssertionError: Homepage is not displayed\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat StepDefinition.CignaHomePageStepDef1.homepage_is_displayed(CignaHomePageStepDef1.java:28)\r\n\tat ✽.Then Homepage is displayed(C:/Users/Lenovo/Documents/Swetha/Eclipse Projects/CignaBDD/src/test/resources/features/CignaLoginPage.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CignaHomePageStepDef1.login_page_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
});