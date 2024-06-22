var express = require('express');
var router = express.Router();
var studentModel = require('../src/student/studentModel');


// Add records
router.post('/student/create', async (req, res) => {
  const students = new studentModel(req.body);
  try {
    await students.save();
    res.status(201).send({
        "status": true,
        "message": "Student Created!"
    });
  } 
  catch (error) {
    res.status(400).send(error);
  }
}
);


//View records
router.get('/students', async (req, res) => {
    try {
        const students = await studentModel.find({});
        res.status(200).send(students);
    } 
    catch (error) {
      res.status(400).send(error);
    }
}
);


//Find records
router.get('/students/:id', async (req, res) => {
    try {

        const _id = req.params.id;
        const students = await studentModel.findById({_id});

        if(!students){
            return res.status(404).send();
        }

        res.status(200).send(students);


    } 
    catch (error) {
      res.status(400).send(error);
    }
}
);

//update records
router.patch('/students/:id', async (req, res) => {
    try {
        
        const _id = req.params.id;
        const body =req.body;
        const updateStudents = await studentModel.findByIdAndUpdate(_id, body, { new: true });

        if(!updateStudents){
            return res.status(404).send();
        }

        
        res.status(201).send({
            "status": true,
            "message": "Student Updated!"
        });


    } 
    catch (error) {
      res.status(400).send(error);
    }
}
);

//Delete record
router.delete('/students/:id', async (req, res) => {
    try {
        
        const _id = req.params.id;
        const deleteStudents = await studentModel.findByIdAndDelete(_id);

        if(!deleteStudents){
            return res.status(404).send();
        }


        res.status(201).send({
            "status": true,
            "message": "Student Deleted!"
        });

    } 
    catch (error) {
      res.status(400).send(error);
    }
}
);



module.exports = router;
