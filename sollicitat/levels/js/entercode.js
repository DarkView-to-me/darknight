function entercode() {
    var pl = document.getElementById("level").innerHTML;
    var c = document.getElementById("c").innerHTML;
	var o = document.getElementById("o").innerHTML;
	var d = document.getElementById("d").innerHTML;
	var code = c+o+d
	
    var input = prompt("Insira o código:", "");
    if (input == null || input == "") {
        window.alert("Este campo não pode ficar em branco.");
		end;
    } 
	else
	if (input == code){
         window.location = pl+".html";
         end;
    }
	else {
        window.alert("Código incorreto.");
		end;
    }
}