// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2020 15:30").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  let d0 = "";
  let h0 = "";
  let m0 = "";
  let s0 = "";
  
  if(days < 10){
	d0 = "0";
  }
  if(hours < 10){
	h0 = "0";
  }
  if(minutes < 10){
	m0 = "0";
  }
  if(seconds < 10){
	s0 = "0";
  }
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = d0+days + " dias " + h0+hours + " hrs "
  + m0+minutes + " min " + s0+seconds + " seg ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x); 
	document.getElementById('image').src='iao.png'
    document.getElementById("demo").innerHTML = "";
	document.getElementById("iaob").innerHTML = " <a href='javascript:playAudio()'>it's all over but the crying</a>, and nobody's crying but me<br> friends all over, know I'm trying<br> to forget about how much I care for you<br> it's all over but the dreaming<br> poor little dreams, that keep trying to come true<br> it's all over but the crying<br> and I can't get over crying over you";
	document.title = "it's all over...";
  }
}, 1000);
	setTimeout(function () {
		document.getElementById("hj").innerHTML = "?";
	}, 600000)
