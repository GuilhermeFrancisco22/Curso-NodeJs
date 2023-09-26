const { error } = require("console")
const fs = require("fs")
const path = require("path")

// Criar uma pasta
// fs.mkdir(path.join(__dirname, "/test"),
//     (error) => {
//         if (error) {
//             return console.log("ERROR", error)
//         }
//         console.log("Pasta Criada Com Sucesso!!!")
// })

// Criar arquivo
fs.writeFile(path.join(__dirname, "/test", "test.txt"),
    "hello node ",
    (error) => {
        if (error) {
            return console.log("ERROR: ", error)
        }
        console.log("Arquivo criado!!")
        // adicionar á um arquivo
        fs.appendFile(path.join(__dirname, "/test", "test.txt"),
            "helo, world", (error) => {
                if (error) {
                    return console.log("ERROR: ", error)
                }
                console.log("Arquivo modificado!!")
            })
        // Ler arquivo
        fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf-8", (error, data) => {
            if (error) {
                return console.log("ERROR: ", error)
            }
            console.log(data)
        })
    })

