// CasperJS 화면 캡쳐 프로그램

// Casper 객체 생성 ---- (※1)
var casper = require('casper').create();

// 개시 --- (※2)
casper.start();

// 페이지 열기 --- (※3)
casper.open('http://gs25.gsretail.com/gscvs/ko/products/event-goods');

// 스크린 샷 수행 --- (※4)
casper.then(function() {
    casper.capture("gs25.png");

});

// 실행 --- (※5)
casper.run();