const mongoose = require("mongoose");

const conneToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejscurso.ucgbnfx.mongodb.net/
        `, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conexão bem-sucedida!");
    } catch (error) {
        console.error("Erro ao conectar-se ao banco de dados:", error);
    }
};

module.exports = conneToDatabase;
