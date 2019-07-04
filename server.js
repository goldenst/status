const express = require("express");

const app = express();

app.get("/", (req, res) => res.json({ msg: "Welcom to Status Board API" }));

app.use("/api/users", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/jobs", require("./routes/jobs"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
