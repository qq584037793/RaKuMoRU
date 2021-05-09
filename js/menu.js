(function () {
    var bannerNavUl = document.getElementById('banner-nav-ul');
    var bannerNav = document.getElementById('banner-nav');
    var menus = document.querySelectorAll('.menus-box .menu');
    var bannerLis = document.querySelectorAll('#banner-nav-ul li');

    // イベントの委任
    // onmouseoverバブリング
    bannerNavUl.onmouseover = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            // タッチされたli要素のdata-t属性を取得します
            var t = e.target.getAttribute('data-t');
            // 排他的操作、すべてのliに現在のクラス名を削除させます
            for (var i = 0; i < bannerLis.length; i++) {
                bannerLis[i].className = bannerLis[i].getAttribute('data-t');
            }
            // 検出された現在のliは、currentクラスを追加する
            e.target.className += ' current';
            // 一致するmenuを見つけるmenu
            var themenu = document.querySelector('.menus-box .menu[data-t=' + t + ']');
            // 排他的操作、すべてのボックスからcurrentを削除します
            for (var i = 0; i < menus.length; i++) {
                menus[i].className = 'menu';
            }
            // 一致したアイテムcurrentクラスを追加する
            themenu.className = 'menu current';
        }
    }

    // マウスがボックスから離れたら、メニューを閉じる
    bannerNav.onmouseleave = function () {
        for (var i = 0; i < bannerLis.length; i++) {
            bannerLis[i].className = bannerLis[i].getAttribute('data-t');
            menus[i].className = 'menu';
        }
    }
})();