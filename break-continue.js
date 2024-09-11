//  ==============using break =================

var color="orange";
switch(color){
    case "orange":console.log("this is orange")
    break;
    case "green":console.log("this is green")
    break;
}


for(i=1;i<=10;i++){
    if(i==6){
        break;
    }
    console.log(i)
}

var j=0;
while(j<=10){
    j++;
    if(j==5){
        break;
    }
    
}
console.log(j)



// ========================using continue========================


for(k=1;k<=6;k++){
    if(k<=3){
        continue;
    }
    console.log(k)
}
var l=1;
while(l<=5){
    l++;
    if(l==2){
        continue;
    }
    console.log(l)
}
