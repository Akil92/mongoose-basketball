const Team = require("../models/team");


async function newTeam(req, res) {
  res.render("teams/new", { title: "Add New Team", homePage: "newTeam"});
}

async function create(req, res) {
    console.log(req.body);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    let newTeam = await Team.create(req.body);
     try {
      await MongoDriverError.save();
     } catch (err) {
      console.log(err);
     }
    console.log(newTeam);
    res.redirect("/teams");
  }

async function index(req, res) {
  const teams = await Team.find({});
  res.render("teams/", {title: "All Teams", teams, homePage: "teamIndex"});
}

async function show(req, res) {
    const team = await Team.findById(req.params.id)
    res.render("teams/show", {title: "Team Info", team, homePage: "teamInfo"});
}

async function deleteTeam(req, res) {
  await Team.findOneAndDelete(
    {_id: req.params.id}
  );
  res.redirect("/teams");
}

async function edit(req, res) {
  Team.playerName.findOne({_id: req.params.id});
  res.render("teams/edit", {team});
}

async function update(req, res) {
  try {
  await Team.findOneAndUpdate( {
    _id:req.params.id
  },
    req.body,
    {new: true},
  )
  res.redirect(`/teams/${Team.playerName._id}`)
} catch(err) {
  console.log(err);
}
};


module.exports = {
    create,
    newTeam,
    index,
    show,
    deleteTeam,
    edit,
    update
}