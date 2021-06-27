const https = require('https');
let response = "";
https.get("https://jsonplaceholder.typicode.com/users",(res)=>{
    res.on('data',(name) => {
        response += name;
    });
    res.on('end', () => {
         response = JSON.parse(response)
         return response.map((user) =>{
             console.log(user.name)
         })
    })
})