const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON and URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static("public"));

// Import and set up API routes
require("./routes/apiRoutes")(app);

// Import and set up HTML routes
require("./routes/htmlRoutes")(app);

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});