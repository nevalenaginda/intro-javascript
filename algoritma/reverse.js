const reverse = (words) => {
    words = words.split(" ")
    let newWords= ""
    for (let i = words.length-1; i>=0; i--){ 
        newWords+=words[i]+" "
    } 
    console.log(newWords);
}

reverse(" Saya suka belajar Javascript dengan kamu")

// var teks = " Saya suka belajar Javascript"
// var array=[];
// var kata="";
// j=0;
// for (i=0; i<teks.length; i++){
//     if (teks[i]!= " "){
//         kata = kata + teks[i];
//     }
//     else {
//         array[j]=kata;
//         //console.log(j)
//         j++;
//         kata="";
//     }  
//    /* 
//     if (i==teks.length-1){
//     array[j]=kata;
//     }
//     */
    
// }
// array[j]=kata;
// console.log(array)

// var teks="";
// for (j=j; j>=0; j--){
//     teks = teks + array[j]+" "
// }
// console.log(teks)