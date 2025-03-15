import {test} from '@playwright/test'
import { BasePage } from './Overriding';

class LoginPage extends BasePage {
    // Overriding the performCommonTasks method to provide a specific implementation
    performCommonTasks(): void {
      console.log("Performing login-specific tasks on the login page.");
      
      this.findElement("usernameField");
      this.enterText("usernameField", "ragavi");


      this.findElement("passwordField");
      this.enterText("passwordField", "password123");

      this.clickElement("loginButton");
    }
  }
  
  // Create an object of the BasePage class
  const basePage = new BasePage();
  basePage.performCommonTasks(); // Calling the common method
  
  // Create an object of the LoginPage class
  const loginPage = new LoginPage();
  loginPage.performCommonTasks(); // Calling the overridden method