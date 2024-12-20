import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
const total = [];
let counter = -1;
app.use(bodyParser.urlencoded({ extended: true }));
/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/Blog", (req, res) => {
  res.render("Blog.ejs");
});

app.post("/submit", (req, res) => {
  let name = req.body["name"];
  let email = req.body["email"];
  let blog = req.body["text"];
  counter++;
  const posts = {a: name, b: email, c: blog, d: counter};
  total.push(posts);
  res.render("index.ejs", {total});
  /*
  console.log(posts);
  console.log(total);
  */
});


app.post("/update", (req, res) => {
  let name = req.body["name"];
  let email = req.body["email"];
  let blog = req.body["blog"];
  let current = req.body["count"];
  total.forEach(element => {
    if (current == element.d) {
      element.a = name;
      element.b = email;
      element.c = blog;
    }
  });
  res.render("index.ejs", {total});
  /*
  console.log(total);
  console.log("updated");
  console.log(name);
  console.log(email);
  console.log(blog);
  console.log(current);
  */
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
