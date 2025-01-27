function studentgrade(score)
{
  let grade;
  switch(true){


      case score >=40 && score <=59:
       grade= "D";
       break;

      case score >=60 && score <=79:
       grade= "c";
          break;

      case score >=80 && score <=90:
          grade= "B" ;
          break;

      case score >=91 && score <=100:
           grade = "A" ; 
          break; 

    default:
         grade = "no grade";
    break;
    
  }
  return grade;

}

console.log(studentgrade(54));
console.log(studentgrade(76));
console.log(studentgrade(87));
console.log(studentgrade(97));
console.log(studentgrade(101));