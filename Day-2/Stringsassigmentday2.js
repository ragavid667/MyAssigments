
//example 1
let word = "Hello World"  
let splitword = word.split(",");// split the string into array of words
let slice =word.slice(6, 12); //last word in the array

console.log(splitword);
console.log(slice);
console.log(`the length of the array is: ${slice.length}`); //Calculate the length of  word

//example 2

let word2 = " fly me to the moon "
console.log(word2.trim ());
let splitword2 = word2.split(" ");
console.log(splitword2);
let slice2 = word2.slice(15, 19);
console.log(slice2);
console.log(`the length of the slicedword is: ${slice2.length}`);
console.log(`the length of the word is: ${word2.length}`);


//example 3



  function isAnagram(str1, str2) {
    // Remove spaces and convert to lowercase
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();
    
    // Sort characters and compare
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}


console.log(isAnagram('listen', 'silent'));    
console.log(isAnagram('hello', 'world'));    


