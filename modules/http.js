const http = require("http")
const port = 4040;

const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end("<h1>Home</h1>")
    }
    if (req.url === "/user") {
        const user = [{
            nome: "ze da manga",
            email: "mangaze@da.com"
        },
        {
            nome: "Guilherme",
            email: "gui.s@gmail.com"
        }]
        res.end(JSON.stringify(user))
    }
})

server.listen(port, () => console.log("Servidor on"))