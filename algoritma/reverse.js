const reverse = (words) => {
    //validasi input
    if (typeof (words) === 'string'){
        //memisahkan kata berdasarkan spasi
        words = words.split(" ")
        let newWords= ""
        //membalik kata
        for (let i = words.length-1; i>=0; i--){ 
            newWords+=words[i]+" "
        } 
        //menampilkan hasil
        console.log(newWords);
    }
    else{
        console.log('Input harus string');
    }
}

reverse('Aku Belajar di Arkademy')