const router = require('express').Router();

router.get("/", (_,res) => {
    res.status(200).json({status:200, message:"Index endpoint hit"})
})

module.exports = router;