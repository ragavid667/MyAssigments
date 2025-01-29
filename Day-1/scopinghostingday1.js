//global scope

const browserName = "Chrome";

//function scope
function getBrowserVersion()

    {
          //block scope
        if ( browserName === "Chrome"){

            var browserVersion  = "chrome5";
            console.log("Using var inside the block:" ,browserVersion);
        
        }
        console.log("printing outside the block in var:", browserVersion);
        
         if(browserName === "Chrome"){

            let browserVersion = "chrome7";
            console.log("Using let inside the block :", browserVersion);
            
        }
        console.log("priting Outside the block  in let:", browserVersion);
        

    }

    
    getBrowserVersion();
    
     
    
