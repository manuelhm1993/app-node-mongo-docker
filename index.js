import express from "express";
import mongoose from "mongoose";

const Animal = mongoose.model(
    "Animal",
    new mongoose.Schema({
        tipo: String,
        estado: String,
    })
);

const app = express();

// Se cambió localhost por el nombre del contenedor
mongoose.connect(
    "mongodb://mhenriquez:123456@primer-app-docker:27017/miapp?authSource=admin"
);

app.get("/", async (_req, res) => {
    console.log("listando... chanchitos...");
    const animales = await Animal.find();
    return res.send(animales);
});

app.get("/crear", async (_req, res) => {
    console.log("creando...");
    await Animal.create({ tipo: "Chanchito", estado: "Feliz" });
    return res.send("ok");
});

app.get("/delete", async (_req, res) => {
    console.log("eliminando...");
    await Animal.deleteOne({ tipo: "León" });
    return res.send("ok");
});

app.listen(3000, () => console.log("listening..."));
