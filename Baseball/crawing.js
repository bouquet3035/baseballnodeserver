//casperJs화면 캡쳐 프로그램

//casper 생성
var casper = require('casper').create();

var url ='http://sports.media.daum.net/sports/gamecenter/80008767/cast';

var fs = require('fs');

//var addbutton = '#listUl > li.btn_more > a';

casper.start();

casper.open(url);

casper.then(function () {

    var pr = [];
    casper.echo("텍스트 가져오는중 ") ;
    for(var i = 1 ; i<=438 ; i++ ) {
        var text = casper.fetchText('#cast_0 > ul > li:nth-child(' + i + ') > div > span');

       pr.push('{"talk"'+ ':'+'"'+text+'"'+"}");
    }
    fs.write('/your_path/crawling.js/capture_baseball/baseball.txt',pr,'w');

    casper.echo("텍스트 가져오는거끝");
});


casper.run(function(){
    casper.echo("모든작업 종료 ");


    casper.exit();
});

