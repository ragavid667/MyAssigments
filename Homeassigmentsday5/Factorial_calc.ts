import { error } from "console";

function factorial(n :number ) : number{


if(n < 0)
{
    throw new Error("Input must be a non-negative integer.");
}

let result = 1;

// Loop to compute factorial
for (let i = 2; i <= n; i++) {
    result *= i; // Multiply the result by each integer from 2 to n
}

return result; 

}
 

console.log(factorial(5));  
console.log(factorial(0));  
console.log(factorial(7));


try {
    console.log(factorial(-3)); //  throw an error
} catch (error) {
    console.error(error.message); // Output: "Input must be a non-negative integer."
}