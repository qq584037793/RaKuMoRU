(function () {
    // 要素を取得
    var carousel_list = document.getElementById('carousel_list');
    var left_btn = document.getElementById('left_btn');
    var right_btn = document.getElementById('right_btn');
    var circle_ol = document.getElementById('circle_ol');
    var banner = document.getElementById('banner');
    var circle_lis = circle_ol.getElementsByTagName('li');

    // 最初のliをクローン
    var clone_li = carousel_list.firstElementChild.cloneNode(true);
    //　追加
    carousel_list.appendChild(clone_li);

    // 現在表示されている画像の番号（0から始まります）
    var idx = 0;

    var lock = true;

    // 右ボタンのイベント監視
    right_btn.onclick = right_btn_handler;

    // 関数
    function right_btn_handler () {

        if (!lock) return;
        //ロックを閉じる
        lock = false;
        // transform
        carousel_list.style.transition = 'transform .5s ease 0s';
        // idx+1
        idx++;
        carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
        // それが最後のものかどうかを判断し、それが最後のもの場合は、即座に元に戻します
        if (idx > 4) {
            setTimeout(function () {
                // 取り除くtransform
                carousel_list.style.transition = 'none';
                // delete transform
                carousel_list.style.transform = 'none';
                // 番号は0にする
                idx = 0;
            }, 500);
        }
        setCircles();

        setTimeout(function () {
            lock = true;
        }, 500);
    };

    // 左ボタンのイベント監視
    left_btn.onclick = function () {
        if (!lock) return;
        // ロックを閉じる
        lock = false;

        if (idx == 0) {
            carousel_list.style.transition = 'none';
            carousel_list.style.transform = 'translateX(' + -16.66 * 5 + '%)';
            idx = 4;


            setTimeout(function () {
                carousel_list.style.transition = 'transform .5s ease 0s';
                carousel_list.style.transform = 'translateX(' + -16.66 * 4 + '%)';
            }, 0);
        } else {
            idx--;
            carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
        }

        setCircles();

        setTimeout(function () {
            lock = true;
        }, 500);
    }

    // current設置
    function setCircles () {

        for (var i = 0; i <= 4; i++) {
            if (i == idx % 5) {
                circle_lis[i].className = 'current';
            } else {
                circle_lis[i].className = '';
            }
        }
    }

    // イベントの委任
    circle_ol.onclick = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            // liのdata-n属性を取得。
            var n = Number(e.target.getAttribute('data-n'));
            idx = n;
            carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
            setCircles();
        }
    }

    // タイマー
    var timer = setInterval(right_btn_handler, 2000);

    // マウス入力
    banner.onmouseenter = function () {
        clearInterval(timer);
    }

    // マウスを離れて
    banner.onmouseleave = function () {
        clearInterval(timer);
        timer = setInterval(right_btn_handler, 2000);
    }
})();