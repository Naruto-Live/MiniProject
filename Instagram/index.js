const express = require("express");
const app = express();
const path = require("path");


// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public/JS")));
app.use(express.static(path.join(__dirname, "public/css")));


app.set("views", path.join(__dirname, "/views"));


app.get("/" , ( req , res ) => {
    // for browser output
    res.render("home.ejs");
});


// req.params: This contains the route parameters — the dynamic parts of the URL path.
app.get("/ig/:username" , ( req , res ) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(!data) {
        return res.render("error.ejs");
    }
    console.log(data);
    res.render("instagram.ejs" , { data });
});

app.get("/hello" , ( req , res ) => {
    res.send("Kya bhai kaisa hai !!");
});


















const port = 8080;
app.listen(port , () => {
    // for terminal output
    console.log("Server is responding on port" + port);
});