getPrayerTimes = (method, url) =>{
    return new Promise((resolve, reject)=>{
        const ajax = new XMLHttpRequest()
        ajax.open(method, url)
        ajax.send()
        ajax.onreadystatechange = () =>{
            if (ajax.status == 200){
                const result = JSON.parse(ajax.responseText)
                resolve(result)
            }
            else{
                reject(new Error('Terjadi error'))
            }
        }
    })
}

let city = 'Padang'
baseURL = `https://api.pray.zone/v2/times/today.json?city=${city.toLowerCase()}`


getPrayerTimes('GET', baseURL)
.then(res => {
    const prayTimes = res.results.datetime[0].times
    console.log(`${city} Prayer Times`);
    let i = 1;
    Object.keys(prayTimes).map((keys) =>{
        if(keys !== "Sunrise" && keys !== "Sunset" && keys !== "Midnight" && keys !== "Fajr"){
            console.log(i + '. ' + keys+ ' : ' + prayTimes[keys]);
            i++;
        }
    })
})
.catch(err =>{
    console.log(err.message);
})
