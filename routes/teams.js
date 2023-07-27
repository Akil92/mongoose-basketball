const express = require('express');
const router = express.Router();
const ensureLoggedIn = require("../config/ensuredLoggedIn");

const teamsCtrl = require("../controllers/teams");

router.get("/new", ensureLoggedIn, teamsCtrl.newTeam);

router.get("/", teamsCtrl.index);

router.get("/:id", teamsCtrl.show);

router.post("/", ensureLoggedIn, teamsCtrl.create);

router.delete("/:id", teamsCtrl.deleteTeam);

module.exports = router;
