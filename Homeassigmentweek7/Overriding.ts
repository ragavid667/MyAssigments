import {test} from '@playwright/test'


export class BasePage {
    // Method to find an element on the page
    findElement(element: string): void {
      console.log(`Finding element: ${element}`);
    }
  
    // Method to click on an element
    clickElement(element: string): void {
      console.log(`Clicking on element: ${element}`);
    }
  
    // Method to enter text into an element
    enterText(element: string, text: string): void {
      console.log(`Entering text "${text}" into element: ${element}`);
    }
  
    // Method to perform common tasks (this will be overridden)
    performCommonTasks(): void {
      console.log("Performing common tasks on the page.");
    }
  }
  