var fs = require('fs');
var mysql = require('mysql');
/*var db_config = require('dbinfo.json');*/

var json = fs.readFileSync("Goods.json", "utf-8");

var connection = mysql.createConnection({
    host : "192.168.0.38",
    user : "baraka",
    port : 3306,
    password : "baraka",
    database : "barakastore"
});

var obj = JSON.parse(json);

var items = obj.items;

connection.connect();

for (var i in items){

    var item = items[i];
    var pname = item.pname;
    var oprice = item.oriprice;

    console.log(pname);
    console.log(oprice);

    var params = [pname,oprice]

    connection.query('insert into tbl_pro (pname,oriprice) values (?,?)',params, function(err, rows, fields) {
        if (err) {
            console.log("error");
        };

        console.log(pname+oprice);
    });
    /*console.log('name:'+pname+',price:'+oprice);*/

};
connection.end();


