require("dotenv").config();

const { MongoClient } = require("mongodb");
const URI = process.env.DB_URI;
const client = new MongoClient(URI);

async function dbConnect() {
    try {
        await client.connect();
        console.log('Database connection successful')
    } catch (err) {
        console.log('Database connection failed: ', err.message)
    }
}

module.exports = { client, dbConnect};