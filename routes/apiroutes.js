const noteData = require("../db/note_data");

module.exports = function (app) {
  app.get("/api/notes/", function (req, res) {
    console.log("get /api/notes");
    
    res.json(noteData);
  });

  app.post("/api/notes/", function (req, res) {
    console.log("post /api/notes");
    noteData.push(req.body);
    res.json(true);
  });

  app.delete("/api/notes/", function (req, res) {
    console.log("delete /api/notes");
    noteData.length = 0;
    res.json({ ok: true });
  });
};