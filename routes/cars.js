const router = require('express').Router();

router.get("/", (_,res) => {
    res.status(200).json({status:200, message:"Cars endpoint hit"})
})

module.exports = router;