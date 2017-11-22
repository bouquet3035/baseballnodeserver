var fs = require('fs');
var mysql = require('mysql');
/*var db_config = require('dbinfo.json');*/

var json = fs.readFileSync("teamrank.json", "utf-8");

var connection = mysql.createConnection({
    host : "192.168.0.38",
    user : "baraka",
    port : 3306,
    password : "baraka",
    database : "baseball"
});

var obj = JSON.parse(json);
console.log(obj);

connection.connect();
console.log("컨넥션 성공") ;

for(var i in obj) {

    var teamrank = obj[i];

    var rank = teamrank.rank;
    var teamname = teamrank.teamname;
    var game = teamrank.game;
    var victory = teamrank.victory;
    var lose = teamrank.lose;
    var draw = teamrank.draw;
    var gameodds = teamrank.gameodds;
    var gamecar = teamrank.gamecar;
    var recentgames = teamrank.recentgames;
    var continuity = teamrank.continuity;
    var home = teamrank.home;
    var visiting = teamrank.visiting;

    var teamrankarr = [rank, teamname, game, victory, lose, draw, gameodds, gamecar, recentgames, continuity, home, visiting];

connection.query('insert into tbl_teamrank (rank,teamname, game, victory, lose, draw, gameodds, gamecar, recentgames, continuity, home, visiting) ' +
    'values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', teamrankarr, function (err, rows, fields) {
    if(err){
        console.log(err);
    }

    console.log("다들어갔나 ? ");
});
}


connection.end();

