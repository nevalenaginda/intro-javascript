const printSegitiga = 3;
let strNumber = ''

if (typeof(printSegitiga) === "number"){
    for (let i=printSegitiga; i>=1; i--){
        for(let j=1; j<=i; j++){
            strNumber = strNumber + j.toString() + " "
        }
        strNumber = strNumber + "\n"
    }
    console.log(strNumber)
}
else{
    console.log("Data harus number");
}