
var sec = 0.00;
var timerId;
//setTimeout('start()', 3000); //■追加(3秒後にstart()を実行)

//スタートボタン
function start() {
timerId = setInterval(function() {
sec += 0.01;
document.getElementById('sec').innerHTML = Math.round(sec*100)/100; //もしも0.0で表示したければ10にすること
},10); //この数字はカウントの速さ0.00表示の時は10！
}

//ストップボタン
function stop(){
clearInterval(timerId);
}

//リセットボタン
function reset(){
document.getElementById('sec').innerHTML = '0.00';
sec = 0.00;
}

function getSec(){
	return sec;
}