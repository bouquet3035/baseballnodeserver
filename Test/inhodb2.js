var fs = require('fs');
var mysql = require('mysql');
/*var db_config = require('dbinfo.json');*/

var json = fs.readFileSync("dosan.json", "utf-8");

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

var teamname = obj.teamname;
var war = obj.war;
var game = obj.game;
var hs = obj.hs;
var hn = obj.hn;
var pt = obj.pt;
var hit = obj.hit;
var h2 = obj.h2;
var h3 = obj.h3;
var homerun = obj.homerun;
var bh = obj.bh;
var rbi = obj.rbi;
var sb = obj.sb;
var sf = obj.sf;
var bb = obj.bb;
var ddb = obj.ddb;
var ifb = obj.ifb;
var so = obj.so;
var doubleout = obj.doubleout;
var avg = obj.avg;
var obp =obj.obp;
var slg = obj.slg;
var ops = obj.ops;

var team1 = [teamname, war, game, hs, hn, pt, hit, h2, h3, homerun, bh, rbi, sb, sf, bb, ddb, ifb, so, doubleout, avg, obp ,slg, ops];

connection.query('insert into tbl_teamrecord (teamname, war, game, hs, hn, pt, hit, h2, h3, homerun, bh, rbi, sb, sf, bb, ddb, ifb, so, doubleout, avg, obp, slg, ops ) ' +
    'values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', team1, function (err, rows, fields) {
    if(err){
        console.log(err);
    }

    console.log("다들어갔나 ? ");
});