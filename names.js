const https = require('https');
let response = "";
https.get("https://jsonplaceholder.typicode.com/users",(res)=>{
    res.on('data',(name) => {
        response += name;
    });
    res.on('end', () => {
         response = JSON.parse(response)
         for (let a = 0; a < response.length; a++) {
            console.log(response[a].name);   
        }
    })
})