const mongoose = require("mongoose");
const userSchema = mongoose.Schema;

const user = new userSchema({
	username: String,
	password: String,
	email: String,
});

module.exports = mongoose.model("User", user);
