//casperJs화면 캡쳐 프로그램

//casper 생성
var casper = require('casper').create();
var fs = require('fs');


var url ='http://www.statiz.co.kr/team.php?opt=0&sopt=7&year=2017&team=%EB%91%90%EC%82%B0';  // 선수 페이지

//var addbutton = '#cphContents_cphContents_cphContents_ddlTeam'; // 클릭이벤트 팀선택

casper.start();
casper.viewport(1920, 1080);
casper.open(url);

casper.then(function () {

    var pr = [] ;
    for(var i = 1 ; i <=69 ; i++){
    var text =casper.fetchText("body > div.wrapper > div.content-wrapper > div > section.content > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div:nth-child("+i+") > a");
        pr.push(text + "\r\n") ;
    }
    fs.write('/your_path/baseball_plan.js/basball/dusan.txt',pr ,  'w');

    casper.echo("성공");

});
/*
    casper.wait(2000,function () {
    var button2 = '#cphContents_cphContents_cphContents_ddlTeam > option:nth-child(2)'; // 두산 선택

    casper.mouseEvent('click',button2);

    casper.echo("두산 클릭 성공 ");
        var path = '#cphContents_cphContents_cphContents_ddlTeam > option:nth-child(2)';


        var filename = '/your_path/baseball_plan.js/baseball/' +'2'+ 'playerimg.png';

        this.captureSelector(filename, path);
    });

    casper.wait(2000,function () {
        var path = '#cphContents_cphContents_cphContents_ddlTeam > option:nth-child(2)';


        var filename = '/your_path/baseball_plan.js/baseball/' +'3'+ 'playerimg.png';

        this.captureSelector(filename, path);
    });

    casper.wait(4000,function () {

        var button3 = '#cphContents_cphContents_cphContents_udpRecord > div.inquiry > table > tbody > tr:nth-child(1) > td:nth-child(2)' ; // 계정웅 선수 클릭

        casper.mouseEvent('click',button3);

        casper.echo("선수 클릭 성공 ");

    });*/


    /*casper.wait(4000,function () {
        var path = '#contents > div.sub-content > div.player_info > div.player_basic > div > img ';

        var filename = '/your_path/baseball_plan.js/baseball/' + 'playerimg.png';
           this.captureSelector(filename, path);
    });*/
































//     casper.wait(5000,function () {
//
//
//
//
//             //
//             // for (var i = 1; i <=9; i++) {
//             //     //var path = '#tblTeamRank > thead > tr > th:nth-child('+i+')';
//             //     //var filename = '/your_path/baseball_plan.js/baseball/' + 'teamranking' + i + '.png';
//             //     var text = casper.fetchText('#tblTeamRank > thead > tr > th:nth-child('+i+')');
//             //     var text1 =casper.fetchText('#tblTeamRank > tbody > tr:nth-child(1) > td:nth-child('+i+')');
//             //     array.push(text);
//             //     array.push(text1);
//             //     casper.echo(i);
//             //     //   this.captureSelector(filename, path);
//             // };
//             // fs.write('/your_path/baseball_plan.js/basball/teamranking.txt',array ,  'w');
//             //
//             // for (var i = 1; i <=9; i++) {
//             //     //var path = '#tblTeamRank > thead > tr > th:nth-child('+i+')';
//             //     //var filename = '/your_path/baseball_plan.js/baseball/' + 'teamranking' + i + '.png';
//             //     var text = casper.fetchText('#tblTeamRank > thead > tr > th:nth-child('+i+')');
//             //     var text1 =casper.fetchText('#tblTeamRank > tbody > tr:nth-child(1) > td:nth-child('+i+')');
//             //     array.push(text);
//             //     array.push(text1);
//             //     casper.echo(i);
//             //     //   this.captureSelector(filename, path);
//             // };
//             // fs.write('/your_path/baseball_plan.js/basball/teamranking.txt',array ,  'w');
//
//
//
//
//             // for(var j=1 ; j <=32 ; j++) {
//             //     var path2 = '#contents > div.relCon > div.prodListWrap > ul:nth-child(50) > li:nth-child(' + j + ')';
//             //     var filename = '/your_path/baseball_plan.js/cu/' + 'cu_' + j + '.png';
//             //     casper.echo(j);
//             //     this.captureSelector(filename, path2);
//             //     var text = casper.fetchText('#contents > div.relCon > div.prodListWrap > ul:nth-child(50) > li:nth-child('+j+') > p.prodName');
//             //     array.push(text);
//             //     fs.write('/your_path/baseball_plan.js/cu/name.txt',text , 'w');
//             //
//             // }
//
//         })
//
//     });
//
//
// });



/////////////////////////////////
//
// casper.then(function() {
//
//     var addbutton = '#listUl > li.btn_more > a';
//     var add2 = '#moreImg > a';
//
//     casper.mouseEvent('click', addbutton);
//
//     casper.echo("클릭성공");
//
//     casper.wait(2000, function () {
//         for (i = 1; i < 17; i++) {
//             casper.wait(2000, function () {
//                 casper.mouseEvent('click', add2);
//                 casper.echo("두번째 성공 " + i);
//                 casper.wait(1000);
//             });
//         }
//         casper.wait(2000);
//         casper.echo("로딩중");
//     });
//
//     casper.then(function () {
//         casper.echo("물품 로딩중 ");
//         for (var i = 2; i < 185; i++) {
//             var path = '#listUl > li:nth-child(' + i + ') > a'
//             var filename = '/your_path/baseball_plan.js/captures/' + 'cu_' + i + '.png'
//             casper.echo(i);
//             this.captureSelector(filename, path);
//         }
//     });
//
// });





//
// casper.then(function(){
//     var addbutton = '#moreImg > a';
//     for(i=1 ; i <=16 ; i++) {
//         if (casper.exists(addbutton)) {
//             casper.mouseEvent('click', addbutton);
//             casper.echo("클릭성공"+i);
//         }
//         casper.wait(3000);
//     }
//
//     casper.echo("로딩중2");
// });
//
//
// casper.then(function () {
//     casper.echo("물품 로딩중2 ");
//     for(var i = 25 ; i <185 ; i++){
//         var path = '#listUl > li:nth-child(' + i + ') > a'
//         var filename = '/your_path/baseball_plan.js/captures/' + 'cu_' + i + '.png'
//         casper.echo(i);
//         this.captureSelector(filename, path);
//     }
// });


casper.run(function(){
    casper.echo("모든작업 종료 ");
    casper.exit();
});
