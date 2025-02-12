function fibonacci (n:number ) : number[]{


    if(n < 0)
        
    {
        throw new Error("Input must be a positive integer.");
    }
    
    let index : number[] = [0, 1];
    
    // Loop to compute factorial
    for (let i = 2; i < n; i++) {

        let nextvalue = index [i -1] +  index [i - 2];
        index.push(nextvalue);
        // Multiply the result by each integer from 2 to n
    }
    
    return index; 

}

console.log(fibonacci(5));

try {
    console.log(fibonacci(-3)); //  throw an error
} catch (error) {
    console.error(error.message); // Output: "Input must be a non-negative integer."
}

