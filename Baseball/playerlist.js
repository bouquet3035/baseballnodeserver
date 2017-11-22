//casperJs화면 캡쳐 프로그램

//casper 생성
var casper = require('casper').create();

var url ='http://www.doosanbears.com/players/index.do';  //두산 사이트 url

var fs = require('fs');

//var addbutton = '#listUl > li.btn_more > a';

casper.start();

casper.open(url);

casper.then(function () {

    var pr = [];
    casper.echo("텍스트 가져오기 시작");

    var baseballmanager = casper.fetchText("#EntryDataAdd > tr:nth-child(1) > td:nth-child(1)") ;  // 감독
    var baseballcoach = [] ;

    for(var i = 1 ; i<=8 ; i++){
     baseballcoach [i] = casper.fetchText("#EntryDataAdd > tr:nth-child("+i+") > td:nth-child(2)") ;   //코치
        pr.push("코치:"+baseballcoach[i]+"\r\n");
    }

    var baseballpitcher= [] ;
    for(var i = 1; i<=14 ; i++){
        baseballpither = casper.fetchText("#EntryDataAdd > tr:nth-child("+i+") > td:nth-child(3)") ;
        pr.push("투수:"+ baseballpitcher[i]+"\r\n");

    }

    pr.push("감독:"+baseballmanager+"\r\n");


     fs.write('/your_path/crawling.js/capture_baseball/playrecord.txt',pr,'w');
    casper.echo("텍스트 가져오는거끝");
});


casper.run(function(){
    casper.echo("모든작업 종료 ");


    casper.exit();
});
