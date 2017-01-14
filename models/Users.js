var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
	name: {type: String, required: true},
	emailId: String
	//notes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Note'}]
});

module.exports = mongoose.model('Users', UsersSchema);


