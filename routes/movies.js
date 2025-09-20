const router = require('express').Router();
const { ObjectId } = require('mongodb');

// MongoDB global variables
const { client } = require('../mongodb')
const db = client.db("sample_mflix")
const collection = db.collection("movies")

// Create a new document
router.post("/", async (req,res) => {
    const body = req.body;
    try {
        await collection.insertOne(body);
        res.status(201).end()
    } catch (err) {
        console.log('Unable to create document: ', err.message)
        res.status(500).json({ status: 500, message: "Internal Error "})
    }
});

// Retrieve documents and limit and sorted by last 5
router.get("/", async (_,res) => {
    try {
        const documents = await collection.find().sort({_id: -1}).limit(5).toArray();
        res.status(200).json({status:200, message:documents})
    } catch (err) {
        console.log('Unable to retrieve documents: ', err.message)
        res.status(500).json({ status: 500, message: "Internal Error "})
    }
});

// Update a record
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    
    try {
        const result = await collection.replaceOne({ _id: new ObjectId(id) }, body); // Replaces the entire document, use updateOne for partial update
        
        if (result.matchedCount === 0) return res.status(404).json({ status: 404, error: 'Document not found' });
        
        res.status(200).json({ status: 200, message: 'Document updated successfully' });
    } catch (err) {
        console.log("Unable to update document: ", err.message);
        res.status(500).json({ status: 500, message: "Internal Error "})
    }
});

// Delete a document
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    
    try {
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        
        if (result.deletedCount === 0) return res.status(404).json({ status: 404, error: 'Document not found' });
        
        res.status(200).json({ status: 200, message: 'Document deleted successfully' });
    } catch (err) {
        console.log("Unable to delete document: ", err.message);
        res.status(500).json({ status: 500, message: "Internal Error "})
  }
});
module.exports = router;