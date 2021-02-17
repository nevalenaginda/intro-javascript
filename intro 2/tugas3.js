let valueSelection = (firstValue, lastValue, arrayData) =>{
    let isArrayisNumber = arrayData.every(element => typeof(element) == 'number' ? true : false)
    if (isArrayisNumber){
        if (firstValue > lastValue) console.log("Nilai akhir harus lebih besar dari nilai awal");
        else if (arrayData.length < 5) console.log("Jumlah data dalam array harus lebih dari 5");
        else{
            let result = arrayData.filter(value =>(value > firstValue && value < lastValue) && value).sort((a, b) =>  a - b);
            result.length > 0 ? console.log(result) : console.log("Range angka dalam dalam Array tidak ditemukan")
        }
    }
    else{
        console.log("Semua elemen array harus berupa angka");
    }  
}


let array = [1, 3, 5, 6, 7, 10, 100, 1000]
valueSelection(5, 200, array)