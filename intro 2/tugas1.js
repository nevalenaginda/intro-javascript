//Fungsi Built In Untuk String Pada Javascript


//1. repeat()
// repet() digunakan untuk menduplikasi string sesuai jumlah (n) 
// duplikasi yang diinginkan
// Example:
// let str1 = "Arkademy "
// let repearStr1 = str1.repeat(3)
// console.log(repearStr1)


//2. slice()
// slice() digunakan untuk mengambil string dengan rentang indeks awal sampai akhir tertentu
// Example
// let fullName='Nevalen Aginda Prasetyo'
// shortName = fullName.slice(0,7)
// console.log(shortName);


//3. toString()
// toString() digunakan untuk menjadikan suatu objek menjadi string
// Example 
// const pi = 3.14
// console.log(pi.toString());
// let hobbies = ["Main Game", "Nonton Bola"]
// console.log(hobbies.toString());
// let user = {
//     name: "Nevalen Aginda Prasetyo",
//     age: 23,
//     favoritNumber: 46
// }
// console.log(user.favoritNumber.toString());
// let isMarried = false
// console.log(isMarried.toString());


//4. trim()
// trim() digunakan untuk menghapus spasi kosong diawal atau diakhir string
// let str = "                   Hari ini hari      kamis     "
// console.log(str.trim());


//5. includes()
// includes() digunakan untuk memeriksa antara string 1 dan string 2. 
// Apakah string 1 berada di string 2. Metod ini menghasilkan nilai boolean
// let address = "Jl. Perum Polri, Rajabasa, Bandar Lampung"
// let street = "Jl. Perum Polrii"
// console.log(address.includes(street))


//Fungsi Built In Untuk Array Pada Javascript

//6. Unshift()
// unshift() digunakan untuk menambah elemen baru pada array dan ditempatkan pada posisi awal (elemen pertama)
// let days = ['Monday','Tuesday','Wednesday','Friday']
// days.unshift("Sunday")
// console.log(days);


//7. shift()
// Shift() digunakan untuk menghapus elemen pertama pada array.
// let days = ['Monday','Tuesday','Wednesday','Friday']
// days.shift()
// console.log(days);

//8. reverse()
// reverse() digunakan untuk mengurutkan indeks array dari yang terbesar ke terkecil
// let num = [11, 2, 30, 41, 4,  5, 6, 7, 8, 9, 0]
// console.log(num.reverse());


//9. pop()
// pop() digunakan untuk menghapus elemen array yang paling terakhir
// let days = ['Monday','Tuesday','Wednesday','Friday']
// days.pop()
// console.log(days);


//10. concat()
// concat() digunakan untuk menggabungkan dua array menjadi satu
// let southEastAsiaCountries = ["Indonesia", "Malaysia", "Vietnam", "Singapore"]
// let eastAsiaCountries = ["China", "Japan", "South Korea", "North Korea"]
// let asia = southEastAsiaCountries.concat(eastAsiaCountries)
// console.log(asia);
