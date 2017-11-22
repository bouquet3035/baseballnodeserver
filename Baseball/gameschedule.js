//casperJs화면 캡쳐 프로그램

//casper 생성
var casper = require('casper').create();

var url ='http://www.statiz.co.kr/schedule.php?opt=8&sy=2017';

var fs = require('fs');

//var addbutton = '#listUl > li.btn_more > a';

casper.start();

casper.open(url);

casper.then(function () {

    var pr = [];
    casper.echo("텍스트 가져오는중 ") ;
    for(var i = 1 ; i<=7 ; i++ ) {
        var text = casper.fetchText('body > div.wrapper > div.content-wrapper > div > section.content > div > div:nth-child(2) > div > div > div > div.box-body.no-padding > table > tbody > tr:nth-child(1) > th:nth-child('+i+')');
        va
        pr.push(text);
    }
    fs.write('/your_path/crawling.js/capture_baseball/gameschedule.txt',pr,'w');

    casper.echo("텍스트 가져오는거끝");
});


casper.run(function(){
    casper.echo("모든작업 종료 ");


    casper.exit();
});

