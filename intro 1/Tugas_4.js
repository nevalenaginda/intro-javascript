let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
            },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

//mengubah data name, email, dan menambah hobby menggunakan spread
data = {
    ...data,
    name: "Nevalen Aginda Prasetyo",
    email: "nevalen@gmail.com",
    hobby: ["ngoprek elektronik","jalan-jalan", "main game", "nonton anime"]

}
console.log("Data yang telah diubah \n", data);


//mengambil data street dan city menggunakan destructing
let {street, city}= data.address;

console.log(`
Hasil destructing
Street: ${street}
City: ${city}`);

