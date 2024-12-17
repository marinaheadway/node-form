const express = require ('express');
const app = express ();
const mongoose = require ('mongoose');

mongoose.set ("strictQuery", false);
mongoose.connect ('mongodb+srv://headway2121:%TCHjsS_uH.X2d7@cluster0.o1cvm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const messageSchema = {
    name:String, 
    email:String,
    message: String
}

const message = mongoose.model ('MyMessages', messageSchema);
app.get ('/', (req, res)=> {
    res.sendFile(__dirname + "/index.html")
})

app.listen (8000, () => {
    console.log ("Server is listening on the port 8000")
}) 