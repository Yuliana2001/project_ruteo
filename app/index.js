//importar la librería express
import express from "express"

//porque agregué type module
import path from 'path'
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url))


//creacion de servidor
const app = express();
const PORT = process.env.PORT || 4000;
app.set("port", PORT);


//configuracion a la app para que se pueda acceder a todos los archivos de public como static
app.use(express.static(__dirname + "/public"));


//se hace correr el servidor node con los archivos js
app.listen(app.get("port"));
console.log("servidor corriendo en ", app.get("port"));

//para que no aparezca el cannotGet
app.get("/", (req,res) => res.sendFile(__dirname+"/pages/login.html"));
app.get("/register", (req,res) => res.sendFile(__dirname+"/pages/register.html"));
app.get("/mapa", (req,res) => res.sendFile(__dirname+"/pages/mapa.html"));
app.get("/index", (req,res) => res.sendFile(__dirname+"/pages/index.html"));