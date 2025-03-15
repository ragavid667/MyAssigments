import{test} from '@playwright/test'


class Report {
    // Method Overload Signatures
    reportStep(msg: string, status: string): void; // Version 1: two arguments
    reportStep(msg: string, status: string, snap: boolean): void; // Version 2: three arguments
  
    // Implementation of the method
    reportStep(msg: string, status: string, snap?: boolean): void {
      if (snap !== undefined) {
        // If the snap parameter is provided, include it in the message
        console.log(`Message: ${msg} | Status: ${status} | Take Snapshot: ${snap}`);
      } else {
        // If the snap parameter is not provided, only show the message and status
        console.log(`Message: ${msg} | Status: ${status}`);
      }
    }
  }
  
  // Create an object of the Report class
  const report = new Report();
  
  // Call the overloaded methods with different arguments
  
  // Version 1: Calling with two arguments (msg and status)
  report.reportStep("Test Step 1", "Passed");
  
  // Version 2: Calling with three arguments (msg, status, and snap)
  report.reportStep("Test Step 2", "Failed", true);
  