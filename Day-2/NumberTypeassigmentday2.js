function Checknumbertype (number)
{
    

    if(number >0)
    {
        return "positive";
        
    }
    else if(number <0)
    {
        return "Negative";
        
    }
    else (number === 0)
    {
          return "zero";
         
    }       
}

    console.log(Checknumbertype(10));
    console.log(Checknumbertype(-6));
    console.log(Checknumbertype(0));