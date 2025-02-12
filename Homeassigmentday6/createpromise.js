/*- Create a Promise named `conditionalPromise` that resolves with the message 
`"Resolved successfully"` if a random number is greater than 0.5, and rejects with the 
message `"Rejected"` otherwise. 
[Hint: Use Math.random()]
- Use the `conditionalPromise` created to log the resolved or rejected value to the 
console using `.then` and `.catch`.*/



//new promise is created
const conditionalPromise = new Promise((resolve , reject) => {

const randomNumber = Math.random(); 

//check if random number is greater than 0.5
if (randomNumber > 0.5 )
{

    resolve (`"Resolved successfully"`);
}
else
{
    reject(`"Rejected"`);
}

});
//use promise with then and catch
conditionalPromise

.then((message) => {
    console.log(message);

})
.catch((error) =>{
console.log(error);

});