//------ Dependencies ------//

var express = require("express");
var router = express.Router();

//------ Import Model ------//

var burger = require("../models/burger.js");

//------ Create Routes ------//

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var burgerObj = {
			burgers: data
		};
		console.log(burgerObj);
		res.render("index", burgerObj);
	});
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "name", "full"
  ], [
    req.body.name, req.body.full
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    full: req.body.full
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;