package com.cigna.runnerfile;

import org.junit.runner.RunWith;

import org.junit.runner.RunWith;		
import cucumber.api.CucumberOptions;		
import cucumber.api.junit.Cucumber;		

@RunWith(Cucumber.class)				
@CucumberOptions(features="C:/Users/Lenovo/Documents/Swetha/Eclipse Projects/CignaBDD/src/test/resources/features/CignaLoginPage.feature",
glue={"StepDefinition"},
dryRun=false,
format = {"pretty", "html:target/Destination"})	
public class Runner {

}
