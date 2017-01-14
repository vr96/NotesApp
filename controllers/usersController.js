var mongoose = require('mongoose');
var Users = mongoose.model('Users');

var sendJSONResponse = function(res, status, content) {

	res.status(status);
	res.json(content);

};

module.exports.createUser = function(req, res) {
	
	var user = new User();

	user.name = req.body.name;
	user.email = req.body.emailid;


	user.save(function(err) {
		
		if(err) {
			var resp = sendJSONResponse(res, 400, "Error creating user");
			res.send(resp);
		}

		else {
			var resp = sendJSONResponse(res, 200, {"status" : "success", "name": req.body.name});
			res.send(resp);
		}


	}); 

};

module.exports.getUser = function(req, res) {
	res.send(sendJSONResponse(res, 200, "Varun Raghav Ramesh"));
};