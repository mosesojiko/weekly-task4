// import required modules
const http = require('http')
const fs = require('fs');
const port = 5000;
const hostname = '127.0.0.1';

//create a server
const server = http.createServer((req, res) =>{
    res.writeHead(200, {'content-type':'text/html'})

    //read file from index.html
    fs.readFile('./index.html', 'utf8', (err, data) =>{
        if(err){
            console.error(err)
            return
        }
        res.end(data)
    })
})
server.listen(port, ()=>{
    console.log(`Server listening on ${hostname}:${port}`)
})
//run the server with node app.js, and check browser with 127.0.0.1:5000
