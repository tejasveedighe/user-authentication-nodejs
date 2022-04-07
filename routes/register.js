const router = require("express").Router();
const userModel = require("../models/user");

router.get("/", (req, res) => {
	res.render("register/register");
});

router.post("/", async (req, res) => {
	const { username, password, email } = req.body;
	const user = new userModel({ username, password, email });
	await user.save((err, user) => {
		if (err) {
			res.render("register/register", {
				username,
				email,
			});
		} else {
			res.redirect("/");
		}
	});
});

module.exports = router;
