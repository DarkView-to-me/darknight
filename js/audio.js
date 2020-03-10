function playAudio() { 
var lp = document.getElementById("myAudio"); 
  lp.play(); 
  document.getElementById("iaob").innerHTML = " it's all over but the crying, and nobody's crying but me<br> friends all over, know I'm trying<br> to forget about how much I care for you<br> it's all over but the dreaming<br> poor little dreams, that keep trying to come true<br> it's all over but the crying<br> and I can't get over crying over you";
  setTimeout(function() {
	document.getElementById("hh").innerHTML = "?";
	return;
  }, 169000)
}