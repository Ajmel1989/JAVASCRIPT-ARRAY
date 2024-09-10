ar=[10,20,30,40,50,60,70,80,90]
person=[{"name":"ajmel"},{"name":"aliya"},{"name":"appu"},{"name":"anu"}]
person.forEach(function(value,index){
    console.log(value.name)
});

sum=0;
for(i in ar ){
    sum=sum+ar[i]
}
console.log("Total="+sum)

total=0;
ar.forEach(function(value,index){
   total=total+value
   
})
console.log(total) 
ar.forEach(function(value,index){
    total=total+value
    
 })
 console.log(total)