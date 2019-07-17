const express = require("express");
const connectDb = require("./config/db");
var bodyParser = require("body-parser");

const app = express();

connectDb();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "Welcom to Status Board API" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/jobs", require("./routes/jobs"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
