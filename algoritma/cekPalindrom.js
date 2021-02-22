//fungsi untuk menghilangkan spasi dalam variabel words
const removeSpace = (words) => {
    let newWords =''
    for (let i =0; i<words.length; i++){
        if (words[i] !== ' '){
            newWords+=words[i]
        }
    }
    return newWords
}

//fungsi utama untuk cek kata palindrom
const cekPalindrom = (words) =>{
   //validasi kata harus string
    if (typeof(words)==='string'){
        //merubah word menjadi huruf kecil
        words = words.toLowerCase();
        //menghilangkan space pada words
        words = removeSpace(words);
        //mendefinisikan variabel status
        let status;
        //mencari titik tengah words
        if (words.length % 2 === 0){
            midPoint = words.length / 2;
        }
        else{
            midPoint = (words.length-1) / 2 + 1
        }

        //menginisialisasilan pointer j yang merupakan penunjuk letak karakter paling kanan
        j = words.length-1;

        for (let i = 0; i<midPoint; i++){

            //mengevealuasi apakah karakter paling kiri sama dengan karakter paling kanan
            //hingga pointer i mencapai titik midPoint
            if (words[i] === words[j]){
                status = "Palindrom"
                j--;
            }
            else{
                status = "Bukan Palindrom"
                break;
            }
        }
        //mencetak status kata
        console.log("Kata Ini "+status);
    }
    else{
        console.log("Input harus string");
    }
}

cekPalindrom('Malam')