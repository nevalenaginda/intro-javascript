const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day.toLowerCase()
            })
            if (cek){
                resolve(cek)
            }
            else{
                reject(new Error(`Hari ${day.toLowerCase()} bukan hari kerja`))
            }
        }, 3000)
    })
}

// cekHariKerja('minggu')
// .then(res=>{
//     console.log('Hari ' +res + ' adalah hari kerja');
// })
// .catch(err=>{
//     console.log(err.message);
// })
// .finally(console.log("Program berhasil dijalankan"))

prosesCekHariKerja = async(day) => {
    try{
        let res = await cekHariKerja(day)
        console.log('Hari ' +res + ' adalah hari kerja');
    }
    catch(err){
        console.log(err.message);
    }
    finally{
        console.log('Program berhasil dijalankan');
    }
}

prosesCekHariKerja('senin')