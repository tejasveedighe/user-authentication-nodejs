const router = require("express").Router();
const userModel = require("../models/user");

router.get("/", (req, res) => {
	res.render("register/register");
});

module.exports = router;
