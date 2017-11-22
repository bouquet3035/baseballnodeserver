//casperJs화면 캡쳐 프로그램

//casper 생성
var casper = require('casper').create();

var url ='http://sports.media.daum.net/sports/gamecenter/80008767/cast';

var fs = require('fs');


casper.start();

casper.open(url);

casper.then(function () {

    casper.echo("시작") ;

    var pr = [];



    for(var i = 2; i<=12 ; i++) {

        var table = casper.fetchText('#default_4 > table:nth-child(3) > tbody > tr.row_fst > td:nth-child('+i+')');

        pr.push(table);


    }

    casper.echo("로딩중") ;

    fs.write('/your_path/crawling.js/capture_baseball/playrecorsd.txt',pr,'w');


    casper.echo("끝") ;

});


casper.run(function(){
    casper.echo("모든작업 종료 ");
    casper.exit();
});
