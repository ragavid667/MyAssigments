//enum represents different environments

enum Environment {
LOCAL ="LOCAL",
DEVELOPMENT ="DEVELOPMENT",
STAGING = "STAGING",
PRODUCTION = "PRODUCTION"

}
//function to stimulate running void is used
function runTests(env: Environment): void {
      console.log(`Running tests on the ${env} environment.`);
      

}
//calls runTests with different enum values
runTests( Environment.LOCAL)
runTests( Environment.DEVELOPMENT)
runTests( Environment.STAGING)
runTests( Environment.PRODUCTION)

