

function runTests(testType){

    switch(testType){
        case   "smoke":
        console.log("testing type is smoke")
        break;

        case  "sanity":
        console.log("testing type is sanity")
        break;

        case  "regression":
        console.log("testing type is regression")
        break;

        default:
            console.log("default testing type")
            break;
    }

}
runTests("sanity");


