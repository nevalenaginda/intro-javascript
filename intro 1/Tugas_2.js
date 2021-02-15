const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 65.7;
let mean;


function getGrade(mean){
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
    return grade;
}


if ( typeof(mtk) ==="number" && typeof(bahasaIndonesia) ==="number" && typeof(bahasaInggris) ==="number" && typeof(ipa) ==="number"){
    if((mtk<0 || mtk>100) || (bahasaIndonesia<0 || bahasaIndonesia>100) || (bahasaInggris<0 || bahasaInggris>100) || (ipa<0 || ipa>100)){
        console.log("Nilai UN harus berada pada range 0 - 100");
    }
    else{
        mean = (mtk + bahasaIndonesia + bahasaInggris + ipa)/4;
        console.log(`Rata-rata = ${mean} \nGrade = ${getGrade(mean)}`);
    }
}
else {
    console.log("Masing-masing nilai UN tidak boleh kosong dan Nilai UN harus berupa angka dengan range 0 - 100");
}
