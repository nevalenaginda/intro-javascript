/*
Buat variabel dengan nama biodata dan tipe data object dengan value dan tipe data  sebagai berikut:
name (string)
age(number)
hobbies (array)
IsMaried (boolean)
schoolList (Array of Object) with key name, yearIn, yearOut, and major (if any, if no set “null” )
skills (Array of Obj) with key skillName and level (beginner, advanced, expert)
interestInCoding (Boolean)
*/

const biodata = {
	name: "Nevalen Aginda Prasetyo",
	age: 23,
    hobbies: ["Ngoprek Elektronik", "Jalan-Jalan", "Main Game", "Nonton Anime"],
    isMaried: false,
    schoolList: [
        {
            name: "SDN 1 Negararatu",
            yearIn: 2003,
            yearOut: 2009,
            major: null
        },
        {
            name: "SMPN 6 Kotabumi",
            yearIn: 2009,
            yearOut: 2012,
            major: null 
        },
        {
            name: "SMAN 1 Sungkai Utara",
            yearIn: 2012,
            yearOut: 2015,
            major: "IPA" 
        },
        {
            name: "Universitas Lampung",
            yearIn: 2015,
            yearOut: 2020,
            major: "Fisika Instrumentasi"
        }],
    skills:[
        {
            skillName: "Arduino",
            level: "Advanced"
        },
        {
            skillName: "C++",
            level: "Advanced"
        },
        {
            skillName: "Python",
            level: "Advanced"
        },
        {
            skillName: "Raspberry Pi",
            level: "Advanced"
        },
        {
            skillName: "HTML",
            level: "Beginner"
        },
        {
            skillName: "CSS",
            level: "Beginner"
        },
        {
            skillName: "Javascript",
            level: "Beginner"
        }],
    interestInCoding: true 
}

console.log(biodata)