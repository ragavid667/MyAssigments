import { Browser } from "./BrowserInheritance.spec";


export class Safari extends Browser {
    // Constructor to pass properties to the superclass
    constructor(browserVersion: string) {
      super("Safari", browserVersion);
    }
  
    // Method unique to Safari
    readerMode(): void {
      console.log(`Activating Reader Mode in Safari v${this.browserVersion}`);
    }
  
    // Method unique to Safari
    fullScreenMode(): void {
      console.log(`Switching to Full-Screen Mode in Safari v${this.browserVersion}`);
    }
  }