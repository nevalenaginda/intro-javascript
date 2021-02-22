const divideAndSort = (number) =>{
    if(typeof number === 'number'){
        const strNum = number.toString()
        if (strNum.length<=16){
            const arrayNum = strNum.split('0');
            const arrayNumSort = arrayNum.map(number => number.split('').sort().join(''))
            const result = parseInt(arrayNumSort.join(''))
            console.log(result);
        }
        else{
            console.log('Jumlah digit maksimal adalah 16');
        }
    }
    else{
        console.log('Input harus number');
    }
}

divideAndSort(5956560159466056)