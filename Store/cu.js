//casperJs화면 캡쳐 프로그램

//casper 생성
var casper = require('casper').create();
var fs = require('fs');


var url ='http://cu.bgfretail.com/event/plus.do?category=event&depth2=1&sf=N#';

//var addbutton = '#listUl > li.btn_more > a';

casper.start();
casper.viewport(1920, 1080);
casper.open(url);
casper.then(function () {

    var button = '#contents > div.relCon > div.depth3.mb40 > ul > li.eventInfo_02 > a';

    casper.mouseEvent('click',button);

    casper.echo("클릭 성공 ");

    var button2 = '#contents > div.relCon > div.prodListWrap > div > div.prodListBtn-w > a';

    var array = [] ;


    casper.wait(5000,function () {
        casper.mouseEvent('click',button2);
        casper.echo('더보기 버튼 실행 ');
        casper.wait(3000,function () {


            for (var i = 1; i <=40 ; i++) {
                var path = '#contents > div.relCon > div.prodListWrap > ul > li:nth-child('+i+')';
                var filename = '/your_path/baseball_plan.js/cu/' + 'cu' + i + '.png';
                var text = casper.fetchText('#contents > div.relCon > div.prodListWrap > ul:nth-child(33) > li:nth-child('+i+') > p.prodName > a');
                array.push(text);
                fs.write('/your_path/baseball_plan.js/cu/name.txt',text , 'w');
                casper.echo(i);
                this.captureSelector(filename, path);
            };

                for(var j=1 ; j <=32 ; j++) {
                    var path2 = '#contents > div.relCon > div.prodListWrap > ul:nth-child(50) > li:nth-child(' + j + ')';
                    var filename = '/your_path/baseball_plan.js/cu/' + 'cu_' + j + '.png';
                    casper.echo(j);
                    this.captureSelector(filename, path2);
                    var text = casper.fetchText('#contents > div.relCon > div.prodListWrap > ul:nth-child(50) > li:nth-child('+j+') > p.prodName');
                    array.push(text);
                    fs.write('/your_path/baseball_plan.js/cu/name.txt',text , 'w');

                }

        })

    });


});



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
