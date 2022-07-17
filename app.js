import express from "express";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8080;

app.set('view engine', 'hbs');

app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render(`home`, {name: 'David Astudillo', title:'Node course'});
});

app.get("/elements", (req, res) => {
    res.sendFile(`${__dirname}/public/elements.html`);
});

app.get("/generic", (req, res) => {
    res.sendFile(`${__dirname}/public/generic.html`);
});
app.get("*", (req, res) => {
    res.sendFile(`${__dirname}/public/404.html`);
});

app.listen(port, () => console.log(`Listening in the ${port} port`));
