var toneList = ["do.mp3", "re.mp3", "mi.mp3", "fa.mp3", "so.mp3", "ra.mp3", "si.mp3", ];
var mnt = new Array("+", "*", "/", "=");
var nli = new Array("1","2","3","4","5","6","7")
function calc(ch) {
    if (ch == "=") {
        var elem = document.getElementById("tlc");
        elem.innerHTML = eval(elem.innerHTML);
        var ssu = new SpeechSynthesisUtterance();
        ssu.text = 'いこぉぉる';
        ssu.lang = 'ja-JP';
        speechSynthesis.speak(ssu);
        ans = elem.innerHTML;
        var audio = document.createElement('audio');
        audio.src = toneList[ans - 1];
        audio.play();
    } else if (ch == "C") {
        var elem = document.getElementById("tlc");
        elem.innerHTML = "";
        var ssu1 = new SpeechSynthesisUtterance();
        ssu1.text = 'cliaa';
        ssu1.lang = 'ja-JP';
        speechSynthesis.speak(ssu1);
    } else if (ch == "+") {
        var elem = document.getElementById("tlc");
        elem.innerHTML += ch;
        var ssu2 = new SpeechSynthesisUtterance();
        ssu2.text = 'ぷらぁす';
        ssu2.lang = 'ja-JP';
        speechSynthesis.speak(ssu2);
    } else if (ch == "-") {
        var elem = document.getElementById("tlc");
        elem.innerHTML += ch;
        var ssu2 = new SpeechSynthesisUtterance();
        ssu2.text = 'まぁいなぁす';
        ssu2.lang = 'ja-JP';
        speechSynthesis.speak(ssu2);
    } else if (ch == "*") {
        var elem = document.getElementById("tlc");
        elem.innerHTML += ch;
        var ssu2 = new SpeechSynthesisUtterance();
        ssu2.text = 'かける';
        ssu2.lang = 'ja-JP';
        speechSynthesis.speak(ssu2);
    } else if (ch == "/") {
        var elem = document.getElementById("tlc");
        elem.innerHTML += ch;
        var ssu2 = new SpeechSynthesisUtterance();
        ssu2.text = 'わぁる';
        ssu2.lang = 'ja-JP';
        speechSynthesis.speak(ssu2);
}
    for (var x = 0; x <= 7; x++) {
        if (ch == nli[x]){
        var elem = document.getElementById("tlc");
        elem.innerHTML += ch;
        var audio = document.createElement('audio');
        audio.src = toneList[x];
        audio.play();
        }
    }
    
    if (elem.innerHTML > 7 && elem.innerHTML < 10) {
        txt = "エラー：音源が存在しません。";
        var elem = document.getElementById("tlc");
        elem.innerHTML = txt;
        var ssu3 = new SpeechSynthesisUtterance();
        ssu3.text = '音源が存在しません。';
        ssu3.lang = 'ja-JP';
        speechSynthesis.speak(ssu3);
    }
    if (elem.innerHTML > 9) {
        txt2 = "エラー：二桁以上の計算はできません。";
        var elem = document.getElementById("tlc");
        elem.innerHTML = txt + txt2;
        var ssu4 = new SpeechSynthesisUtterance();
        ssu4.text = '二桁以上の計算はできません。';
        ssu4.lang = 'ja-JP';
        speechSynthesis.speak(ssu4);
    }
    if (elem.innerHTML.charAt(0) == "-") {
        txt4 = "マイナスの計算はできません";
        var elem = document.getElementById("tlc");
        elem.innerHTML = txt4;
        var ssu4 = new SpeechSynthesisUtterance();
        ssu4.text = 'マイナスの計算はできません';
        ssu4.lang = 'ja-JP';
        speechSynthesis.speak(ssu4);
    }
    for (var i = 0; i <= 3; i++) {
        if (elem.innerHTML.charAt(0) == (mnt[i])) {
            txt3 = "最初に記号は入れられません。";
            var elem = document.getElementById("tlc");
            elem.innerHTML = txt3;

            var ssu4 = new SpeechSynthesisUtterance();
            ssu4.text = 'さいしょにきごぅは入れられません。';
            ssu4.lang = 'ja-JP';
            speechSynthesis.speak(ssu4);
        };
    }
}