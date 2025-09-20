const router = require('express').Router();

// MongoDB global variables
const { client } = require('../mongodb')
const db = client.db("sample_mflix")
const collection = db.collection("movies")

// Create a new document
router.post("/", async (req,res) => {
    const body = req.body;
    try {
        await collection.insertOne(body)
        res.status(201).end()
    } catch (err) {
        console.log('Unable to create document: ', err.message)
        res.status(500).json({ status: 500, message: "Internal Error "})
    }
});
// Retrieve documents and limit by 5
router.get("/", async (_,res) => {
    try {
        const documents = await collection.find().limit(5).toArray();
        res.status(200).json({status:200, message:documents})
    } catch (err) {
        console.log('Unable to retrieve documents: ', err.message)
        res.status(500).json({ status: 500, message: "Internal Error "})
    }
});

module.exports = router;