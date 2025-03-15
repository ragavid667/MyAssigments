import{test} from '@playwright/test'


class APIClient {
    // Method Overload Signatures
    sendRequest(endpoint: string):void; // Version 1: single arguments
    sendRequest(endpoint: string, requestBody: string, requestStatus: boolean): void; // Version 2: three arguments
  
    // Implementation of the method
    sendRequest(endpoint: string, requestBody?: string, requestStatus?: boolean): void {
        if (requestBody !== undefined && requestStatus !== undefined) {
            // If both requestBody and requestStatus are provided, log all details
            console.log(`Sending request to endpoint: ${endpoint}`);
            console.log(`Request Body: ${requestBody}`);
            console.log(`Request Status: ${requestStatus ? "Success" : "Failed"}`);
          } else {
            // If only endpoint is provided, log the endpoint
            console.log(`Sending request to endpoint: ${endpoint}`);
          }
        }
      }
      
      // Create an instance of the APIClient class
      const apiClient = new APIClient();
      
      // Call the sendRequest method with one argument (endpoint)
      apiClient.sendRequest("https://api.example.com/data");
      
      // Call the sendRequest method with three arguments (endpoint, requestBody, requestStatus)
      apiClient.sendRequest("https://api.example.com/update", '{"name": "John"}', true);
      
      
  
 