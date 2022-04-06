const router = require("express").Router();
const userModel = require("../models/user");

router.get("/", (req, res) => {
	// making a empty login credential object
	let loginCredential = new userModel({
		username: "",
		password: "",
	});
	res.render("login/login", { loginCredential });
});

router.post("/", async (req, res) => {
	let loginCredential = new userModel({
		username: req.body.username,
		password: req.body.password,
		email: req.body.email,
	});
	const user = await userModel.findOne({ username: req.body.username });
	if (user.password === req.body.password) {
		res.send("Login Complete User authenticated");
	} else {
		// if credentials are not correct the username will stay same and the password will be empty
		res.render("login/login", {
			loginCredential: { ...loginCredential, password: " " },
		});
	}
});

module.exports = router;
