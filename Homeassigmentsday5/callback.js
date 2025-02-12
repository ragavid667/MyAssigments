let browser = "Chrome";
function checkBrowserVersion (version , call ){
  
   call();
   setTimeout(() => {
    console.log(" ` This messsage is delayed by  2 seconds`")
        },2000);

        console.log("Browserversion :" + version);

}
 

function getbrowser() {

    console.log("chrome version")

}
  checkBrowserVersion("7.80", getbrowser) ;
