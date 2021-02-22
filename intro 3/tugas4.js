const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
.then(data =>{
    return data.json();})
.then(res =>{ 
    res.map((object)=>{
        console.log(object.name);
    })
    })
.catch(err => {
    console.log(new Error(err));
    });