const express = require('express');
const router = express.Router();

const teamsCtrl = require("../controllers/teams");

router.get("/new", teamsCtrl.newTeam);


module.exports = router;
