const Team = require("../models/team");

async function create(req, res) {
  try{
    await Team.create(req.body);
    console.log(req.body);
    res.redirect("/teams/new");
  } catch (err) {
    res.render("teams/new", { errorMsg: err.message });
  }
}

async function newTeam(req, res) {
res.render("teams/new", { title: "Add New Team", errorMsg: ""});
}






module.exports = {
    create,
    newTeam,
}