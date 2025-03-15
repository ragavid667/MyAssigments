import { chromium, Page,expect } from '@playwright/test'

export class Browser {
    // Variables (properties)
    browserName: string;
    browserVersion: string;
  
    // Constructor to initialize the properties
    constructor(browserName: string, browserVersion: string) {
      this.browserName = browserName;
      this.browserVersion = browserVersion;
    }
  
    // Method to open a URL
    openURL(url: string): void {
      console.log(`Opening URL: ${url} on ${this.browserName} v${this.browserVersion}`);
    }
  
    // Method to close the browser
    closeBrowser(): void {
      console.log(`${this.browserName} is closing.`);
    }
  
    // Method to navigate back
    navigateBack(): void {
      console.log(`Navigating back in ${this.browserName}`);
    }
  }