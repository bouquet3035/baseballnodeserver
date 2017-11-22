//casperJs화면 캡쳐 프로그램

//casper 생성
var casper = require('casper').create();

var url ='http://www.koreabaseball.com/TeamRank/TeamRank.aspx';

var fs = require('fs');

//var addbutton = '#listUl > li.btn_more > a';

casper.start();

casper.open(url);

casper.then(function () {

    var pr = [];

    casper.echo("텍스트 가져오는중 ") ;
    for(var i = 1 ; i<=12 ; i++ ) {
        var text = casper.fetchText('#cphContents_cphContents_cphContents_udpRecord > table > thead > tr > th:nth-child('+i+')');
        pr.push(text);
        //pr.push('{"talk"'+ ':'+'"'+text+'"'+"}");
    }
    for(var j = 1; j <=10; j++ ) {
        pr.push('\r\n') ;
        for (var i = 1; i <= 12; i++) {
            var text1 = casper.fetchText('#cphContents_cphContents_cphContents_udpRecord > table > tbody > tr:nth-child('+ j +') > td:nth-child(' + i + ')');
            pr.push(text1);
            //pr.push('{"talk"'+ ':'+'"'+text+'"'+"}");
        }
    }
    fs.write('/your_path/crawling.js/capture_baseball/baseballrank.txt',pr,'w');

    casper.echo("텍스트 가져오는거끝");
});


casper.run(function(){
    casper.echo("모든작업 종료 ");


    casper.exit();
});

