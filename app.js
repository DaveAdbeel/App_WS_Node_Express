//imports
import express from "express";
import hbs from "hbs";
import * as dotenv from 'dotenv'

//dotenv
dotenv.config()

//dirname and filename
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Init vars express
const app = express();
const port = process.env.PORT;

//Handlebars
hbs.registerPartials(`${__dirname}/views/components`);
app.set("view engine", "hbs");

//Express
app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render(`home`, { name: "David Astudillo", title: "Node course" });
});

app.get("/elements", (req, res) => {
    res.render(`elements`, { name: "David Astudillo", title: "Node course" });
});

app.get("/generic", (req, res) => {
    res.render(`generic`, { name: "David Astudillo", title: "Node course" });
});

app.get("*", (req, res) => {
    res.render(`404`);
});

app.listen(port, () => console.log(`Listening in the http://localhost:${port}`));
