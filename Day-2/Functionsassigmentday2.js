

function userProfile(name){   // function declaration   

    console.log("Hello,<name>!")
}
 userProfile();


 let double = () => {     // arrow function

      console.log("value is returned");
 }

 double();


    setTimeout(() =>  {    // anonymous function expression
    console.log("`This message is delayed by 2 seconds` ")

 },2000);


 function getUserData(callback)    // callback function 
 {

    console.log("Userdata:");

    setTimeout(() => {

        console.log("This message displays after 3 secs");
        let user = {name : "ragavi",age : 27 };
        callback(user);
        }, 3000 );
    }

 function displayUserdata(user){

    console.log(`user name: ${user.name}`);
    console.log(`user age: ${user.age}`);
 }

 getUserData(displayUserdata);
 
