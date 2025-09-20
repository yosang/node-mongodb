require("dotenv").config();

// Configure and setup express
const express = require('express');
const port = process.env.API_PORT | 5000;
const app = express()
app.use(express.json()) // Parses incoming JSON

// Routes
const indexRouter = require("./routes/index.js")
const carsRouter = require("./routes/cars.js")
app.use("/", indexRouter);
app.use("/cars", carsRouter);

// Initiate express
app.listen(port, () => console.log("App is listening on port: ", port))