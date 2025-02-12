function fetchDatafromDatabase(){
    return new Promise((resolve, reject ) => {
     console.log("Fetching data from database...");
     setTimeout(( ) =>
     {
       const data = false;
       if(data){
 
         resolve("Data fetched successfully!");
     }
     else{
 
         reject("Data not found!");
     }
 
         
     },3000);  // 3-seconds delayed
 
    
 
 });

}
 
 fetchDatafromDatabase()
 .then(message => {
    console.log(message); 
})
 .catch(error => {
    console.log(error);
 });
