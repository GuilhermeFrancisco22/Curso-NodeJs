// const { Person } = require("./person")
const dotenv = require("dotenv")
const conneToDatabase = require("./src/database/connect")

dotenv.config()

conneToDatabase()

// require("./modules/path")
// require("./modules/fs")
// require("./modules/http")
require("./modules/express")

// const person = new Person("Guilherme")

