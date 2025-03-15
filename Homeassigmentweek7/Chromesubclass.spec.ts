import { Browser } from "./BrowserInheritance.spec";



export class Chrome extends Browser {
    // Constructor to pass properties to the superclass
    constructor(browserVersion: string) {
        super("Chrome", browserVersion);
    }
  
    // Method unique to Chrome
    openIncognito(): void {
      console.log(`Opening Incognito mode in Chrome v${this.browserVersion}`);
    }
  
    // Method unique to Chrome
    clearCache(): void {
      console.log(`Clearing cache in Chrome v${this.browserVersion}`);
    }
  }