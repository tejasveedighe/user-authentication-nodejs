const router = require("express").Router();
const userModel = require("../models/user");

router.get("/", (req, res) => {
	res.render("register/register", {
		data: { message: "", username: "", password: "", email: "" },
	});
});

router.post("/", async (req, res) => {
	let user = await userModel.find({
		username: req.body.username,
	});
	if (user) {
		res.render("register/register", {
			data: {
				message: "Username already exists",
				username: req.body.username,
				password: "",
				email: req.body.email,
			},
		});
	} else {
		const newUser = new userModel({
			username: req.body.username,
			password: req.body.password,
			email: req.body.email,
		});
		newUser.save();
		res.render("register/success");
	}
});

module.exports = router;
