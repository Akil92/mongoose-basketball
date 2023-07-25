const Court = require("../models/court");
const Team = require("../models/team");

async function index(req, res) {
    let court = await Court.find({});
res.render("courts/index", {title: "All courts", court});
}

async function addTeam(req, res) {
    let team = await Team.findById(req.params.id);
    let court = await Court.findById(req.params.id);
    res.redirect("courts/index");
}



module.exports = {
    addTeam,
    index
}