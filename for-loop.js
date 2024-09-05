var ar=["ajmel","aliya","hamdan","mehzan"]
for(var i=0;i<=ar.length;++i){
    console.log(ar[i])
}



//nested loop


for(j=1;j<5;j++){
    
    for(k=1;k<j;k++){
    if(j%2==0){
        console.log(" * ")
        k=k+1
    }
    else{
        console.log(" $ ")
    }
    }
}