import { chromium, Page,expect } from '@playwright/test'


    

export class TestData {
    // Method to simulate entering credentials
     enterCredentials(): void {
      console.log("Entering credentials...");
    }
  
    // Method to simulate navigating to the homepage
    navigateToHomePage(): void {
      console.log("Navigating to the homepage...");
    }
  }
    
  