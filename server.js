const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");

mongoose.connect("mongodb://localhost/login", { useNewUrlParser: true });

// used so that the post method can use the req body for the username and password
app.use(express.urlencoded({ extended: false }));

// to set the response and request as json
app.set(express.json());

// set the view engine to ejs
app.set("view engine", "ejs");

// calling the login router
app.use("/", loginRouter);
app.use("/register", registerRouter);

app.listen(3001, () => {
	console.log("Server running on 3001");
});
