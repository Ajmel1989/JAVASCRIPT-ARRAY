var a=" "
for(i=1;i<=5;i++){
    
    if(i%2==0){

        a=a+" * "
    }
    else{
        a=a+" $ "
    }
    
    console.log(a)
}

// basics

a=10
b=20
c=a+b
console.log(c)

// first programme

a="10"  //string variable
b=20
c=a+b
console.log(c)

// second programme

names=[273,'ajmel',9447821924,35.6,'true']
console.log(names[1])
console.log(names[2]) 

// third programme  array


ar=[10,20,30,40,50,60,70,80,90]
console.log(ar)       //array printing
console.log(ar[3])    //third position printing
console.log(ar.length)    //array length printing
console.log(ar.join(","))   // array change list printing
console.log(ar.indexOf(50))  // search array list in 50 value, if value is in true then print position
console.log(ar.indexOf(100))   // search array list in 100 value, if value is in false then print position value is -1
console.log(ar.push(55))   //array's last positin adding this value
console.log(ar)          //print the update value of array
console.log(ar.pop())     //delete the last position value in array
console.log(ar)
console.log(ar.shift())    //delete the first position value in array
console.log(ar)
console.log(ar.splice(0,3))  // delete the 0th position to 3value in array
console.log(ar)      //update the array values printing








