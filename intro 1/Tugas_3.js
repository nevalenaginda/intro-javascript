/*
Buatlah program yang memiliki satu variabel dengan nama 
“printSegitiga” yg berisi tipe data number yang 
menghasilkan output segitiga 
terbalik yang berisi angka

Contoh: 
const printSegitiga = 5

Output: 
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
*/

const printSegitiga = 4;


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