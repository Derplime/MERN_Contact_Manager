// User model for database

const mongoose = require("mongoose");

// User Schema for model
const userSchema = new mongoose.Schema({
	userName: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
