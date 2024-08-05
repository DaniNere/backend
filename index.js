import express from "express";
import {config} from "dotenv";
config();
import { rotasContato } from "./src/routes/contato.js";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("MongoDB Conectado!");
}).catch((err) =>{
console.log(err);
})

const app = express();
app.use(express.json());

app.use("/contato", rotasContato);
app.use("/usuario", rotasUsuario);


app.listen(3000, ()=>{
    console.log("Servidor está rodando em http://localhost:3000")
});