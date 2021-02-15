const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

let mean = (mtk + bahasaIndonesia + bahasaInggris + ipa)/4
let grade;
if (mean >= 0 && mean <= 59){
    grade = "E";
}
else if (mean >= 60 && mean <= 69){
    grade = "D";
}
else if(mean >= 70 && mean <= 79){
    grade = "C";
}
else if(mean >= 80 && mean <= 89){
    grade = "B";
}
else if(mean >= 90 && mean <= 100){
    grade = "A";
}

console.log(`Rata-rata = ${mean}
Grade = ${grade}`)