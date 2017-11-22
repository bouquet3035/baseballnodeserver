var fs = require('fs');
var mysql = require('mysql');
/*var db_config = require('dbinfo.json');*/

var json = fs.readFileSync("package.json", "utf-8");

var connection = mysql.createConnection({
    host : "192.168.0.38",
    user : "baraka",
    port : 3306,
    password : "baraka",
    database : "baseball"
});

var obj = JSON.parse(json);
var teams = obj;
console.log(obj);
connection.connect();



for (var i in teams) {

    var team = teams[i];
    var teamname = team.teamname;
    var war = team.war;
    var game = team.game;
    var hs = team.hs;
    var hn = team.hn;
    var pt = team.pt;
    var hom = team.hom;
    var h2 = team.h2;
    var h3 = team.h3;
    var hrr = team.hrr;
    var bh = team.bh;
    var rbi = team.rbi;
    var sb = team.sb;
    var sf = team.sf;
    var bb = team.bb;
    var ddb = team.ddb;
    var ifb = team.ifb;
    var so = team.so;
    var doo = team.doo;
    var avg = team.avg;
    var obp =team.obp;
    var slg = team.slg;
    var ops = team.ops;


    console.log("제대로 들어갔나 ");


    var team1 = [teamname, war, game, hs, hn, pt, hom, h2, h3, hrr, bh, rbi, sb, sf, bb, ddb, ifb, so, doo, avg, obp ,slg, ops];

    console.log( i+"="+team1[i]) ;

    // connection.query('insert into tbl_teamrecord (teamname, war, game, hs, hn, pt, h, 2h, 3h, hr, bh, rbi, sb, sf, bb, 49, ifb, so, do, avg, obp, slg, ops ) ' +
    //     'values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', team1, function (err, rows, fields) {
    //     if(err){
    //         console.log(err);
    //     }
    //
    //     console.log("다들어갔나 ? ");
    // });
};

connection.query('insert into tbl_teamrecord (teamname) ' +
    'values (?)', team1[0], function (err, rows, fields) {
    if(err){
        console.log(err);
    }

    console.log("다들어갔나 ? ");
});



    connection.end();




