const printSegitiga = 5;


function makeTriangleNum(num){
    let strNum = '';
    for (let i=num; i>=1; i--){
        for(let j=1; j<=i; j++){
            strNum = strNum + j.toString() + " ";
        }
        strNum = strNum + "\n";
    }
    return strNum;
}


if (typeof(printSegitiga) === "number"){
   console.log(makeTriangleNum(printSegitiga));
}
else{
    console.log("Data harus number");
}