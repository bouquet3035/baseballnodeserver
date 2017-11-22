//casperJs화면 캡쳐 프로그램

//casper 생성
var casper = require('casper').create();

var url ='http://www.koreabaseball.com/TeamRank/TeamRank.aspx';

var fs = require('fs');

//var addbutton = '#listUl > li.btn_more > a';

casper.start();

casper.open(url);

casper.echo("텍스트 가져오는중 ") ;
casper.then(function () {

    var pr = [];

    for(var i =1 ;i<=10; i++){
        var rank = casper.fetchText('#cphContents_cphContents_cphContents_udpRecord > table > tbody > tr:nth-child('+i+') > td:nth-child(1)');//순위
        var teamname =casper.fetchText('#cphContents_cphContents_cphContents_udpRecord > table > tbody > tr:nth-child('+i+') > td:nth-child(2)'); //팀명
        var game = casper.fetchText('#cphContents_cphContents_cphContents_udpRecord > table > tbody > tr:nth-child('+i+') > td:nth-child(3)'); //총경기
        var victory=casper.fetchText('#cphContents_cphContents_cphContents_udpRecord > table > tbody > tr:nth-child('+i+') > td:nth-child(4)'); //승리한 횟수
        var lose =casper.fetchText('#cphContents_cphContents_cphContents_udpRecord > table > tbody > tr:nth-child('+i+') > td:nth-child(5)'); //패한 횟수
        var draw =casper.fetchText('#cphContents_cphContents_cphContents_udpRecord > table > tbody > tr:nth-child('+i+') > td:nth-child(6)'); //무승부 횟수
        var gameodds =casper.fetchText('#cphContents_cphContents_cphContents_udpRecord > table > tbody > tr:nth-child('+i+') > td:nth-child(7)'); // 승률
        var gamecar =casper.fetchText('#cphContents_cphContents_cphContents_udpRecord > table > tbody > tr:nth-child('+i+') > td:nth-child(8)'); // 게임차
        var recentgames =casper.fetchText('#cphContents_cphContents_cphContents_udpRecord > table > tbody > tr:nth-child('+i+') > td:nth-child(9)'); //최근 10경기
        var continuity =casper.fetchText('#cphContents_cphContents_cphContents_udpRecord > table > tbody > tr:nth-child('+i+') > td:nth-child(10)'); //연속
        var home =casper.fetchText('#cphContents_cphContents_cphContents_udpRecord > table > tbody > tr:nth-child('+i+') > td:nth-child(11)'); //홈
        var visiting =casper.fetchText('#cphContents_cphContents_cphContents_udpRecord > table > tbody > tr:nth-child('+i+') > td:nth-child(12)'); //방문

        pr.push("{"+'"'+"rank"+ '"'+ ":"+rank);
        pr.push('"'+"teamname"+ '"'+ ":"+'"'+teamname+'"') ;
        pr.push('"'+"game"+ '"'+ ":"+game);
        pr.push('"'+"victory"+ '"'+ ":"+victory);
        pr.push('"'+"lose"+ '"'+ ":"+lose);
        pr.push('"'+"draw"+ '"'+ ":"+draw);
        pr.push('"'+"gameodds"+ '"'+ ":"+gameodds);
        pr.push('"'+"gamecar"+ '"'+ ":"+gamecar) ;
        pr.push('"'+"recentgames"+ '"'+ ":"+'"'+recentgames+'"');
        pr.push('"'+"continuity"+ '"'+ ":"+'"'+continuity+'"');
        pr.push('"'+"home"+ '"'+ ":"+'"'+home+'"');
        pr.push('"'+"visiting"+ '"'+ ":"+'"'+visiting+'"'+"}");

    }

    fs.write('/your_path/crawling.js/capture_baseball/baseballrank2.txt',pr,'w');

    casper.echo("텍스트 가져오는거끝");
});


casper.run(function(){
    casper.echo("모든작업 종료 ");


    casper.exit();
});