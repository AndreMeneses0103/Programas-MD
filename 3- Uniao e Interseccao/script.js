function saveConj() {
	var nome_conjunto1 = document.getElementById("input_conj1").value.toUpperCase();
	var elementos1 = document.getElementById("input_part1").value;
	elementos1 = elementos1.replaceAll(";", ",");
	var all_elem1 = elementos1.split(",");

	var nome_conjunto2 = document.getElementById("input_conj2").value.toUpperCase();
	var elementos2 = document.getElementById("input_part2").value;
	elementos2 = elementos2.replaceAll(";", ",");
	var all_elem2 = elementos2.split(",");

	var uniao = []
	var interseccao = []

	for(var x = 0; x < all_elem1.length; x++){
		for(var y = 0; y < all_elem2.length; y++){
			if(all_elem1[x] == all_elem2[y]){
                interseccao.push(all_elem1[x])
            }
		}
	}

    alert("Interseccao = " + interseccao)
	// document.getElementById("calculos").style.display = "none";
	// document.getElementById("resul").style.display = "block";

	// document.getElementById("res_conjunto").innerHTML = conjunto;
	// document.getElementById("res_card").innerHTML =
	// 	"#" + nome_conjunto + " = " + num_partes;
	// document.getElementById("res_partes").innerHTML =
	// 	"P(" + nome_conjunto + ") = " + lps;
}

function voltar() {
	document.getElementById("calculos").style.display = "block";
	document.getElementById("resul").style.display = "none";
}
