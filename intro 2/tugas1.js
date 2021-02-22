//1. repeat()
// repet() digunakan untuk menduplikasi string sesuai jumlah (n) 
// duplikasi yang diinginkan
// Example:
// let str1 = "Bootcamp Arkademy "
// console.log(str1.repeat(3))
// console.log(str1)


//2. slice()
// slice() digunakan untuk mengambil string dengan rentang indeks awal sampai akhir tertentu
// Example
// let fullName='Nevalen Aginda Prasetyo'
// console.log(fullName.slice(0,7))
// console.log(fullName)


//3. toString()
// toString() digunakan untuk menjadikan suatu objek menjadi string
// Example 
// const pi = 3.14
// console.log(pi.toString());
// console.log(typeof(pi.toString()));



//4. trim()
// trim() digunakan untuk menghapus spasi kosong diawal atau diakhir string
// let str = "                   Hari ini hari  kamis     "
// console.log(str.trim());


//5. includes()
// includes() digunakan untuk memeriksa antara string 1 dan string 2. 
// Apakah string 1 berada di string 2. Metod ini menghasilkan nilai boolean
let str1 = "Arkdemy"
let str2 = "Em"
console.log(str1.includes(str2))
console.log(str1)


//6. Unshift()
// unshift() digunakan untuk menambah elemen baru pada array dan ditempatkan pada posisi awal (elemen pertama)
// method ini merubah isi array asli
// let days = ['Monday','Tuesday','Wednesday','Friday']
// //console.log(days.unshift("Sunday"))
// days.unshift("Sunday")
// console.log(days);


//7. shift()
// Shift() digunakan untuk menghapus elemen pertama pada array
// method ini mengubah array asli
// let days = ['Monday','Tuesday','Wednesday','Friday']
// // console.log(days.shift)
// days.shift()
// console.log(days);

//8. reverse()
// reverse() digunakan untuk mengurutkan indeks array dari yang terbesar ke terkecil
// method ini mengubah array asli
// let num = [1, 3, 2, 5]
// console.log(num.reverse());
// console.log(num);


//9. pop()
// pop() digunakan untuk menghapus elemen array yang paling terakhir
// method ini mengubah array asli
// let days = ['Monday','Tuesday','Wednesday','Friday']
// days.pop()
// // console.log(days.pop())
// console.log(days);


//10. concat()
// concat() digunakan untuk menggabungkan dua array menjadi satu
// method ini tidak merubah array asli
// let southEastAsiaCountries = ["Indonesia", "Malaysia", "Vietnam", "Singapore"]
// let eastAsiaCountries = ["China", "Japan", "South Korea", "North Korea"]

// console.log(southEastAsiaCountries.concat(eastAsiaCountries))
// console.log(southEastAsiaCountries);
// console.log(eastAsiaCountries);


// 11. some()
// some digunakan untuk mengecek apakah sekurang-kurangnya nilai salah satu elemen array memenuhi kondisi

// let even = number => number%2 == 0
// let numbers = [1, 2, 3, 4, 5, 6, 7]
// console.log(numbers.some(even))

// 12. every()
// every digunakan untuk mengecek apakah nilai array memenuhi kondisi
let IsEven = number => number%2 == 0
let numbers = [2, 4]
console.log(numbers.every(IsEven))
// let evens = [2, 4, 6]
// console.log(evens.every(IsEven))

// 13. Array.of()
// Array.of digunakan untuk membuat array dari setiap argumen yang diparsing
// const convToArray = Array.of(1, "b", true);
// console.log(convToArray); 
