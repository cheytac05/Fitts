

/* Canvasを追加し、追加されたCanvasを返す。 */
function addCanvas(width, height) {
    var screen = document.getElementById('screen');
    // idは 'canvas[n]' (nは要素数) とする
    var id = 'canvas' + (screen.getElementsByTagName('canvas').length + 1).toString();

    //alert( id );

    // Canvas要素を追加
    $('#screen').append(
        $('<canvas></canvas>')
            .attr('id', id)
            .attr('width', width)
            .attr('height', height)
    );

    // ブラウザが未対応の場合はnullを返す
    var canvas = document.getElementById(id);


    if (!canvas || !canvas.getContext)
        return null;


    // スタート地点となる矩形に対する処理
    if(id == "canvas1"){
    canvas.addEventListener("click", startFitts, false);

    canvas.style.position = "absolute";
    canvas.style.left = "190px";
    canvas.style.top = "480px";

    }

    else{

    canvas.addEventListener("click", stopFitts, false);


    var randLeft = (Math.random() * (380 - 10) + 10).toString() + "px";

    /* (Math.random()*(最大値-最小値)+最小値); */
    var randTop = (Math.random() * (380 - 80) + 80).toString() + "px";

    canvas.style.position = "absolute";
    canvas.style.left = randLeft;
    canvas.style.top = randTop;

    }


    return canvas;
}

/* 矩形がクリックされた際の処理 */
function startFitts(){

	if( getSec() <= 0.00 ){
		start();
		addTarget();
	}
}

/* 矩形がクリックされた際の処理 */
function stopFitts(){

	stop();

	var startCanvas = document.getElementById('canvas1');
	var targetCanvas = document.getElementById('canvas2');

	/* スタート地点と目標地点の距離( px )を計算 */
	var y = (targetCanvas.offsetTop - startCanvas.offsetTop);
	var x = targetCanvas.offsetLeft - startCanvas.offsetLeft;

	var distance = Math.sqrt( Math.pow(x, 2) + Math.pow(y, 2) );

	/* 結果をダイアログボックスに提示する */
	var result = confirm( "Time = " + getSec().toFixed(2) +" sec\n"
			+ "Distance = " + distance.toFixed(2) +" px\n"
			+'Width = 120.00 px');

	if(result)
		location.reload();

	else
		location.reload();

}


 /* ウィンドウの読み込み時にスタート地点となる矩形を作成 */
window.onload = function(){

	addRect();

};



/* 共通処理 */
function initContext(canvas, context) {
    // 中にテキストを描画
    //var text = document.forms.fm.text.value;
	var text = "Ready?";
    if (text) {
        context.font = "16px 'Arial'";
        context.fillStyle = "white";
        var x = 30;
        var y = canvas.height/2 + 8;
        context.fillText(text, x, y, canvas.width);
    }
    // ドラッグ可能にする
//    $(canvas).draggable({ containment: '#screen',
//                          scroll: false });
}

/* 四角形を追加 */
function addRect() {
    // Canvasを取得
    var width = 120;
    var height = 50;
    var canvas = addCanvas(width, height);
    if (!canvas) return false;
    // 四角形を描画
    var context = canvas.getContext('2d');
    context.beginPath();
    context.fillStyle = "blue";
    context.fillRect(0, 0, width, height);

    initContext(canvas, context);
}

/* 四角形を追加 */
function addTarget() {
    // Canvasを取得
    var width = 50;
    var height = 50;
    var canvas = addCanvas(width, height);
    if (!canvas) return false;
    // 四角形を描画
    var context = canvas.getContext('2d');
    context.beginPath();
    context.fillStyle = "red";
    context.fillRect(0, 0, width, height);

}
