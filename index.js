require("dotenv").config();

// Configure and setup express
const express = require('express');
const port = process.env.API_PORT | 5000;
const app = express()
app.use(express.json()) // Parses incoming JSON

// Routes
const moviesRouter = require("./routes/movies.js")
app.use("/", moviesRouter);

// MongoDB
const { dbConnect } = require('./mongodb.js');

// Initiate express
app.listen(port, async () => {
    console.log("App is listening on port: ", port);
    console.log("Connecting to database...");
    await dbConnect()
})