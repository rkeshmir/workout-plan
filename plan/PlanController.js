const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const Plan = require('./Plan');
// CREATES A NEW USER
router.post('/', function (req, res) {
        console.log('creating plans', req.body);
		Plan.create({
			name : req.body.name,
			default_period : req.body.default_period,
			items: []
        }, 
        function (err, plan) {
        	console.log('response received', err, plan);
	if (err) 
		return res.status(500).send("There was a problem adding the information to the database.");
	res.status(200).send(plan);
	});
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    console.log('getting plans ...');
	Plan.find({}, function (err, plans) {
	console.log('response received', err, plans);
        if (err) 
		return res.status(500).send("There was a problem finding the plans.");
        res.status(200).send(plans);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {   
	 Plan.findById(req.params.id, function (err, plan) {
        	if (err) 
			return res.status(500).send("There was a problem finding the plans.");
        	if (!plan)
			return res.status(404).send("No plans found.");
        	res.status(200).send(plan);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
	Plan.findByIdAndRemove(req.params.id, function (err, plan) {
	if (err)
		return res.status(500).send("There was a problem deleting the plans.");
        res.status(200).send({
			message: "Plan "+ plan.name +" was deleted."
		});
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
	Plan.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, plan) {
		if (err) return res.status(500).send("There was a problem updating the plans.");
	res.status(200).send(plan);
    });
});
module.exports = router;
