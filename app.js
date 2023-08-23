const express = require("express");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");

// Serve static assets from the "methods-public" directory
app.use(express.static("./methods-public"));
// Parse incoming form data
app.use(express.urlencoded({ extended: false }));
// Parse incoming JSON data
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

// Start the server on port 5000
app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
