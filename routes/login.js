const router = require("express").Router();
const userModel = require("../models/user");

router.get("/", (req, res) => {
	res.render("login/login", {
		data: {
			message: "",
			username: "",
			password: "",
		},
	});
});

router.post("/", async (req, res) => {
	const user = await userModel.findOne({ username: req.body.username });
	if (user && user.password === req.body.password) {
		res.send("Login Complete User authenticated");
	} else {
		// if credentials are not correct the username will stay same and the password will be empty
		res.render("login/login", {
			data: {
				username: req.body.username,
				password: "",
				message: "Incorrect Credentials",
			},
		});
	}
});

module.exports = router;
