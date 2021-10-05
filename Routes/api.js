// dependancies
var express = require('express');
var router = express.Router();
var fs = require('fs');

// ---------------------------------------- start of Endpoints

// CRUD - Create Read Update Delete

// Read
router.get("/", function (req, res) {
    try {
        var rawData = fs.readFileSync('data.json'); // Raw Data
        var students = JSON.parse(rawData);
    
        console.log(students);

        res.status(200).json({ students });
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

// Create
router.post('/', function (req, res) {
    try {
        console.log("Posted Object Is: ", req.body);
        // Open File
        const rawData = fs.readFileSync('data.json');
        // Decode (parse) File
        var students = JSON.parse(rawData);

        //new newObj = req.body;
        //newObj._id = 1;

        // Add Object to Array
        students.push(req.body);

        // Save (write) to File
        const data = fs.writeFileSync('data.json', JSON.stringify(students));

        // Return Data
        res.status(201).json({students})
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Update
router.patch('/:id', function(req, res) {
    res.status(200).json({  message: 'edited the object'})
});

// Delete
router.delete('/:id',  function(req, res) {
    // capture ID
    var id = req.params.id;

    // Open File
    const rawData = fs.readFileSync('data.json');
    // Decode (parse) File
    var students = JSON.parse(rawData);


    // if found, delete
    if (students.length > id) {
        // modify the object
        students.splice(id, 1);

        
        res.status(200).json({ message: 'success'});
    }
    else {
        // fail
        res.status(500).json({ message: 'failed'});
    }
        // show success

    
    // if not found, give error
});


// ----------------------------------------- end of  Endpoints

module.exports = router;