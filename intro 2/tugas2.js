// fungsi untuk memfilter nama sesuai dengan string yang diinginkan
let filterName = (str, arrayNames) => {
    let resultName = arrayNames.filter(name => name.toLowerCase().includes(str.toLowerCase()) && name)
    return resultName 
}

//fungsi untuk membatasi jumlah output dan mencetak informasi
let outputName = (str, count, arrayNames) => {
    outputNames = arrayNames.filter((name, index) => index < count && name)

    const output1 = `Berhasil ditemukan ${outputNames.length} nama yang ingin dicari dari ${arrayNames.length} nama mengandung elemen "${str}"`
    const output2 = `Jumlah nama mengandung elemen "${str}" yang ditemukan hanya ${outputNames.length} tidak sampai ${count}`
    const output3 = `Nama yang mengandung elemen "${str}" tidak ditemukan`

    outputNames.length >= count ? console.log(output1) : (outputNames.length > 0 && outputNames.length < count ? console.log(output2) : console.log(output3))
    console.log(outputNames);
}

//fungsi yang diminta soal
let searchName = (str, count, callback) => {
    const names = ["Abigail", "Alexandra", "Alison",
                    "Amanda", "Angela", "Bella",
                    "Carol", "Caroline", "Carolyn",
                    "Deirdre", "Diana", "Elizabeth",
                    "Ella", "Faith", "Olivia", "Penelope"
    ]

    let filterName = callback(str, names)
    outputName(str, count, filterName)
}

searchName("an", 4, filterName)

    