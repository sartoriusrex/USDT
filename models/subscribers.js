const mongoose    = require('mongoose'),
			Schema      = mongoose.Schema;
			
const SubscribersSchema = new Schema ({
	email: {
		type: String,
		unique: true,
		required: true,
	}
});

const Subscriber = mongoose.model( "Subscriber", SubscribersSchema );

module.exports = Subscriber;