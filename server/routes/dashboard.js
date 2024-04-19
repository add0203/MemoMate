const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashbordController");

// App Routes
router.get("/dashboard", dashboardController.dashboard);

module.exports = router;
