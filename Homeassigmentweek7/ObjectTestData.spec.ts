import test from '@playwright/test'
import { TestData } from './TestData.spec'
import { LoginTestData } from './subclassTestData.spec'

const testData = new TestData();
const loginTestData = new LoginTestData(); // Create an object of LoginTestData (subclass of TestData)
testData.enterCredentials();         // Calling method from TestData
testData.navigateToHomePage();       // Calling method from TestData



loginTestData.enterCredentials();    // Inherited method from TestData
loginTestData.navigateToHomePage();  // Inherited method from TestData
loginTestData.enterUsername("john_doe");  // Method specific to LoginTestData
loginTestData.enterPassword("password123");