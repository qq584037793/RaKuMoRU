(function () {
    var backtotop = document.getElementById('backtotop');

    var timer;

    // トップに戻るボタンの監視
    backtotop.onclick = function () {
        clearInterval(timer);
        // タイマー
        timer = setInterval(function () {
            document.documentElement.scrollTop -= 100;
            if (document.documentElement.scrollTop <= 0) {
                clearInterval(timer);
            }
        }, 20);
    };

    // ページのスクロールを監視する
    window.onscroll = function () {
        // スクロール値
        var scrollTop = document.documentElement.scrollTop || window.scrollY;

        // ページがスクロールされない場合、[トップに戻る]ボタンは非表示になります
        if (scrollTop == 0) {
            backtotop.style.display = 'none';
        } else {
            backtotop.style.display = 'block';
        }
    }
})();