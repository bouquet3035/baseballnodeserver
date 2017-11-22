// 모듈 로드
var client = require('cheerio-httpcli');
var URL = require('url');

// 다운로드
var url = "http://www.statiz.co.kr/team.php?cteam=KIA%2B%ED%95%B4%ED%83%9C&year=2017";
var param = {};

client.fetch(url, param, function(err, $, res) {
    if (err) { console.log("error"); return; }

    // 링크를 추출하여 표시
    $("img").each(function(idx) {
        var src = $(this).attr('src');
        src = URL.resolve(url, src);
        console.log(src);
    });
});
