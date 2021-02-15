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

let dataku = {
    ...data,
    name: "Nevalen Aginda Prasetyo",
    email: "nevalen@gmail.com",
    hobby: ["ngoding","jalan-jalan", "main game", "nonton anime"]

}
console.log(dataku);

const {street, city}= dataku.address;

console.log(`Street: ${street}
City: ${city}`);

