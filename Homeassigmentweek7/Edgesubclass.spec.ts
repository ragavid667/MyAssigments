import { Browser } from "./BrowserInheritance.spec";


export class Edge extends Browser {
    // Constructor to pass properties to the superclass
    constructor(browserVersion: string) {
      super("Edge", browserVersion);
    }
  
    // Method unique to Edge
    takeSnap(): void {
      console.log(`Taking a screenshot in Edge v${this.browserVersion}`);
    }
  
    // Method unique to Edge
    clearCookies(): void {
      console.log(`Clearing cookies in Edge v${this.browserVersion}`);
    }
  }