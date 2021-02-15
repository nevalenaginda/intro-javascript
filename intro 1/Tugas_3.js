const printSegitiga = 9;

function reverseWords(words){
    let revWords = "";
    for(let i = words.length-2; i>=0; i--){
        revWords = revWords + words[i];
    }
    return(revWords)
}

if (typeof(printSegitiga) === "number"){
    for (let i=printSegitiga; i>=1; i--){
        let numberChar = "";
        for(let j=i; j>=1; j--){
            number = j;
            numberChar = numberChar + `${number} `
        }
        numberChar = reverseWords(numberChar)
        console.log(numberChar)
    }
}
else{
    console.log("Data harus number");
}