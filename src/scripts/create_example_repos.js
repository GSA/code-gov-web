var fs = require('fs');
var reposArr = require("../assets/repos.json").repos;

var repos = {};

for (var repo of reposArr) {
  var agency = repo["agency"];
  if (!repos[agency]) {
    repos[agency] = [];
  }
  repos[agency].push(repo);
}

console.log("Writing/splitting repos to files.");
for (var agency in repos) {
  fs.writeFile("tmp/" + agency + ".json", JSON.stringify(repos[agency]), function(err) {
    if(err) {
        return console.log(err);
    }
  });
}
