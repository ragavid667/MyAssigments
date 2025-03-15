import test from '@playwright/test'
import { TestData } from './TestData.spec'

export class LoginTestData extends TestData  {

    enterUsername(username: string): void {
        console.log(`Entering username: ${username}`);
      }
    
      // Method to enter the password
      enterPassword(password: string): void {
        console.log(`Entering password: ${password}`);
      }
    }
