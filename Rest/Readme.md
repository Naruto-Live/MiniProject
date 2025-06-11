uuid ( generate uid using express ) :- npm install uuid





wrong method to use redirect :- res.redirect("index.ejs", { posts });

correct method to use redirect :- res.redirect("index.ejs");

note:- redirect only passes the file not any parameter , and if you need to pass the parameter then use render instead of redirect