const valueSelection = (firstValue, lastValue , arrayData) =>{
    const isArrayisNumber = arrayData.every(element => typeof(element) == 'number')
    if (isArrayisNumber){
        if (firstValue > lastValue) console.log("Nilai akhir harus lebih besar dari nilai awal");
        else if (arrayData.length < 5) console.log("Jumlah data dalam array harus lebih dari 5");
        else{
            const result = arrayData.filter(value =>(value > firstValue && value < lastValue) && value).sort((a, b) =>  a - b);
            result.length > 0 ? console.log(result) : console.log("Range angka dalam dalam Array tidak ditemukan")
        }
    }
    else{
        console.log("Semua elemen array harus berupa angka");
    }  
}


const array1 = [1, 3, 5, 6, 7, 10, 100, 1000]
valueSelection(1, 6, array1)
//valueSelection(1001, 6000, array1)

const array2 = ["1", "2", "3", "4", "5", "6"]
// valueSelection(1, 6, array2)

const array3 = [1, 3, 50]
// valueSelection(1, 60, array3)