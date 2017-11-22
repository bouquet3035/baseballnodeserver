var casper = require('casper')
    .create({ verbose: true, logLevel: 'debug', pageSettings: { webSecurityEnabled: false }});

var url = 'http://gs25.gsretail.com/gscvs/ko/products/event-goods'

var fs = require('fs');

casper.start();
casper.userAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'); //User-Agent를 일반적인 컴퓨터 환경으로 잡습니다. (User-Agent에 따라 페이지 레이아웃을 바꾸는 홈페이지가 많이 존재하기 때문)
casper.viewport(1920, 1080);
/*casper.open(url);*/

casper.then(function() {

    casper.thenOpen(url, function() {

        var pr = [];

        for (k = 2; k < 12; k++){

            var p = k;

            function auto (p) {

                casper.wait(2000, function () {
                    if(p !== 1){

                        var path = '#contents > div.cnt > div.cnt_section.mt50 > div > div > div:nth-child(3) > div > a.next'
                        casper.mouseEvent('click', path);
                    };

                    if(p >= 1){

                        p = p - 1;
                    }

                    for (j = 1; j < 9; j++) {

                        var price =  casper.fetchText('#contents > div.cnt > div.cnt_section.mt50 > div > div > div:nth-child(3) > ul > li:nth-child(' + [j] + ') > div > p.price > span')

                        var text = p +''+ j +''+ casper.fetchText('#contents > div.cnt > div.cnt_section.mt50 > div > div > div:nth-child(3) > ul > li:nth-child(' + [j] + ') > div > p.tit')

                        var contents = '#contents > div.cnt > div.cnt_section.mt50 > div > div > div:nth-child(3) > ul > li:nth-child('+[j]+') > div'

                        var filename = '/your_path/crawling.js/capture/' + text + '__' +price+ '.png'

                        pr.push( ' /n ' + p +''+ j +'__'+ price );

                        fs.write('/your_path/crawling.js/capture/price.txt',pr , 'w');

                        if(!casper.exists('#contents > div.cnt > div.cnt_section.mt50 > div > div > div:nth-child(3) > ul > li:nth-child(' + [j] + ') > div > p.img > img')){
                            return;
                        }

                        this.captureSelector(filename, contents);

                    }
                    this.echo(p);

                });

            }auto(p);
        };
    });

});

casper.run();


