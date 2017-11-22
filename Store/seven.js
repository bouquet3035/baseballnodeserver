//casperJs화면 캡쳐 프로그램

//casper 생성
var casper = require('casper').create();

var url ='http://www.7-eleven.co.kr/product/presentList.asp';

var fs = require('fs');

//var addbutton = '#listUl > li.btn_more > a';

casper.start();

casper.open(url);



casper.then(function() {



    var addbutton = '#listUl > li.btn_more > a';
    var add2 = '#moreImg > a';

    casper.mouseEvent('click', addbutton);

    casper.echo("클릭성공");

    casper.wait(1000, function () {
        for (i = 1; i < 17; i++) {
            casper.wait(1000, function () {
                casper.mouseEvent('click', add2);
                casper.echo("두번째 성공 " + i);
                casper.wait(1000);
            });
        }
        casper.wait(1000);
        casper.echo("로딩중");
    });
    var pr = [];
    casper.then(function () {
        casper.echo("물품 로딩중1 ");

        casper.wait(1000,function () {

            for (var i = 2; i <= 14; i++) {
                var path = '#listUl > li:nth-child(' + i + ') > a';
                var price =  casper.fetchText('#listUl > li:nth-child('+i+') > div > div > div.price > span');
                var text =casper.fetchText('#listUl > li:nth-child('+i+') > div > div > div.name');
                var filename = '/your_path/crawling.js/capture_seven/' + 'seven' + i +text+'-' + price+ '.png';
                casper.echo(i);

                //상품 메모지에 저장
                pr.push( '{"pname":'+ '"'+text+'"'+',"oriprice":'+'"'+price+'"'+ '}');
                fs.write('/your_path/crawling.js/capture_seven/price1.txt',pr , 'w');
                casper.echo("메모도 끝") ;

                this.captureSelector(filename, path);

            }
        });

    });

});

casper.then(function () {
    casper.echo("물품 로딩중2 ");

    var pr = [];

    //상품 15 번 부터 176 번 들어감

        var add2 = '#moreImg > a';

        var path = '#listUl > li:nth-child(' + i + ') > a';
        var price =  casper.fetchText('#listUl > li:nth-child('+i+') > dl > dd.price_list > span ');
        var text =casper.fetchText('#listUl > li:nth-child('+i+') > dl > dt > span.tit_product');
        var filename = '/your_path/crawling.js/capture_seven/' + 'seven' + i +text+'-' + price+ '.png';
        casper.echo(i);

    if(!casper.exists(path)) {

        return;
    }
        //상품 메모지에 저장
        pr.push( '{"pname":'+ '"'+text+'"'+',"oriprice":'+'"'+price+'"'+ '}');
        fs.write('/your_path/crawling.js/capture_seven/price2.txt',pr , 'w');
        casper.echo("메모도 끝") ;

        this.captureSelector(filename, path);

});



casper.run(function(){
    casper.echo("모든작업 종료 ");
    casper.exit();
});



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


