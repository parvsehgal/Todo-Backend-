const express = require("express");
require("dotenv").config();

const todoRoute = require("./routes/todoRoute");

const app = express();
app.use(express.json());

const dbConnect = require("./config/databse");

app.use("/api/v1", todoRoute);

app.listen(process.env.PORT, () => {
  console.log("server instantiated");
});

dbConnect();
