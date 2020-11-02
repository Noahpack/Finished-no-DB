const express = require("express"),
app = express()
ctrl = require("./controller.js"),
port = 3001

app.use(express.json());

app.get("/api/player", ctrl.getPlayer)
app.get("/api/player/:id", ctrl.getOnePlayer);
app.get("/api/lineup/", ctrl.getLineup);
app.post("/api/lineup/:id", ctrl.addToLineup);
app.put("/api/lineup/:index", ctrl.editRating);
app.delete("/api/lineup/:index", ctrl.removeFromLineup);

app.listen(port, () => console.log(`server listening on port ${port}`))