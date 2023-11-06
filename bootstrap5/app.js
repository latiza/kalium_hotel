const http = require("http");
const server = http.createServer((req,res) => {
    res.write("Hello NodeJs!")
    res.end();
})
server.listen(3000);
console.log("A szerver fut a 3000-es porton");