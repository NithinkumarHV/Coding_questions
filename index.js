/*
    Express.js is a minimal and flexible Node.js web application framework 
    that makes it easy to create web servers and define routes for handling 
    different HTTP requests. 
*/
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

/* Middleware functions are like "interceptors"
   They can modify the request or response objects, 
   end the request-response cycle, 
   or pass control to the next middleware in the stack.
*/

/* BODY-PARSER:  parses the incoming request body, 
    typically in JSON or form data format, 
    and makes it available as an object in the request object.
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* LOGGER : logs information about each incoming request, 
   such as the request method, URL, and timestamp. 
   It's useful for debugging and monitoring.
*/
app.use((req, res, next) => {
  console.log(`[${new Date()}] ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  console.log("Request", req.body);
  res.status(200).json({ message: "Welcome to the homepage" });
});

app.get("/user/:id", (req, res) => {
  console.log("Request", req.body, req.params);
  res.send("Welcome to the user page");
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ERROR HANDLING
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = app;
