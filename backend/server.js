const express = require("express");
const jsonServer = require("json-server");
const app = express();
const path = require("path");

//database
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.use("/api", middlewares, router);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});