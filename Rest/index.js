const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
// making unique id for each user using uuid
const { v4: uuidv4 } = require('uuid');
// to change the method of request from post to patch ( or whatever needed )
const methodOverride = require('method-override');
app.use(methodOverride('_method'));



// Middleware to parse ( use to get data from form ( data form submission ))
app.use(express.urlencoded({extended: true}));

// use ejs as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// use public folder
app.use(express.static(path.join(__dirname , "public")));

let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "This is my first post"
    },
    {
        id: uuidv4(),
        username: "LatringParsad",
        content: "This is my second post"
    },
    {
        id: uuidv4(),
        username: "Kuttapuri",
        content: "This is my third post"
    },
    {
        id: uuidv4(),
        username: "KachraPakora",
        content: "This is my fourth post"
    }
];

// Main page
app.get( "/posts" , ( req , res ) => {
    // using views folder
    res.render("index.ejs" , { posts });
});


// Post page
app.get( "/posts/new" , ( req , res ) => {
    res.render( "new.ejs" );
});


// Create a new post and redirect to the main page
app.post( "/posts" , ( req , res ) => {
    let { username , content } = req.body;
    let id = uuidv4();
    posts.push( { id , username , content });
    res.redirect("/posts");
});


// addressing post details like id , username and content
app.get( "/posts/:id" , ( req , res ) => {
    // console.log(req.params);
    let { id } = req.params;
    let post = posts.find( (p) => p.id === id );
    // console.log(post.id);
    res.render( "show.ejs" , { post });
})


// update post page
app.get( "/posts/:id/edit" , ( req , res ) => {
    let { id } = req.params;
    let post = posts.find( (p) => p.id === id );
    res.render( "edit.ejs" , { post });
});


// updating posts
app.patch( "/posts/:id" , ( req , res ) => {
    let { id } = req.params;
    let newContent = req.body.content; 
    let post = posts.find( (p) => p.id === id );
    post.content = newContent;
    res.render("index.ejs" , { posts });
});

// deleting posts
app.delete( "/posts/:id" , ( req , res ) => {
    let { id } = req.params;
    posts = posts.filter( (p) => id !== p.id );
    res.render("index.ejs" , { posts });
});


app.listen(port , () => {
    console.log(`Listening to port ${port}`);
});