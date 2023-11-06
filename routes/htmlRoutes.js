const path = require("path");

module.exports = function (app) {
  app.get("/notes", function (req, res) {
    console.log("get /notes");
    console.log("path= ",path.join(__dirname, "../public/notes.html"));
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", function (req, res) {
    console.log("get /*");
    console.log("path= ",path.join(__dirname, "../public/index.html"));
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};