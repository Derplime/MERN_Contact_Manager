// Contact model for database

const mongoose = require("mongoose");

// Contact Schema for model
const contactSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		default: "",
	},
	email: {
		type: String,
		default: "",
	},
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
