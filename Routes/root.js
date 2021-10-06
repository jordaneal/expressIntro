// dependancies
var express = require('express');
var router = express.Router();

// -------------------------------------- Endpoints

// base route localhost:port
router.get("/", function (req, res) {
    res.send("root");
})

// --------------------------------------------- end Endpoints

module.exports = router;