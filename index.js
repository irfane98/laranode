const http = require("http");
const routes = require('./routes/index.js')
const PORT = process.env.PORT || 3000

const server = http.createServer((req,res)=>{
  const route = new routes(req,res)
});
server.listen(3000)
console.log(`serveur lancé sur le port ${PORT}`)

  
