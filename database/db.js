
const mongoose = require("mongoose")
mongoose.set('strictQuery', false)
const connectToDb = () => {

    mongoose
    .connect(
        "mongodb+srv://root:admin@todolist.oalwd5a.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(() => console.log("Conectado ao Mongoose")
    ).catch((err) => console.log(err))
}
module.exports = connectToDb