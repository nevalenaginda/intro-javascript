let convert = (scale1, scale2 ,temp) =>{
    return new Promise((resolve, reject)=>{
        let resultTemp;
        if (scale1.toLowerCase() === "celcius" && scale2.toLowerCase() === "fahrenheit"){
            resultTemp = 9/5 * temp + 32
            resolve(resultTemp)
        }
        else if (scale1.toLowerCase() === "fahrenheit" && scale2.toLowerCase() === "celcius"){
            resultTemp = 5/9 * (temp - 32)
            resolve(resultTemp)
        }
        else if (scale1.toLowerCase() === "fahrenheit" && scale2.toLowerCase() === "kelvin"){
            resultTemp = 5/9 * (temp - 32) + 273
            resolve(resultTemp)
        }
        else if (scale1.toLowerCase() === "kelvin" && scale2.toLowerCase() === "fahrenheit"){
            resultTemp = 9/5 * (temp - 273) + 32
            resolve(resultTemp)
        }
        else if (scale1.toLowerCase() === "celcius" && scale2.toLowerCase() === "kelvin"){
            resultTemp = temp + 273
            resolve(resultTemp)
        }
        else if (scale1.toLowerCase() === "kelvin" && scale2.toLowerCase() === "celcius"){
            resultTemp = temp - 273
            resolve(resultTemp)
        }
        else if(scale1.toLowerCase() === "celcius" && scale2.toLowerCase() === "celcius"){
            resultTemp = temp
            resolve(resultTemp)
        }
        else if(scale1.toLowerCase() === "fahrenheit" && scale2.toLowerCase() === "fahrenheit"){
            resultTemp = temp
            resolve(resultTemp)
        }
        else if(scale1.toLowerCase() === "kelvin" && scale2.toLowerCase() === "kelvin"){
            resultTemp = temp
            resolve(resultTemp)
        }
        else{
            reject(new Error("Wrong scale"))
        }
    })
}

let Process= (scale1, scale2 ,temp) =>{
    return new Promise((resolve, reject) => {
        if (typeof(temp)=== 'number'){
            resolve(convert(scale1, scale2 ,temp))
        }
        else{
            reject(new Error('Value must a number'))
        }
    })
    
}

const convertTemperature = (scale1, scale2 ,temp) =>{
    Process(scale1, scale2 ,temp)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err.message))
}

convertTemperature("fahrenheit", "celcius", -1000)
convertTemperature("fahrenheit", "celcius", -100000000000000000000000)
convertTemperature("celcius", "celcius", 1)