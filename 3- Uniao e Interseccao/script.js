function saveConj() {
	var nome_conjunto1 = document.getElementById("input_conj1").value.toUpperCase();
	var elementos1 = document.getElementById("input_part1").value;
	elementos1 = elementos1.replaceAll(";", ",");
	var all_elem1 = elementos1.split(",");

	var nome_conjunto2 = document.getElementById("input_conj2").value.toUpperCase();
	var elementos2 = document.getElementById("input_part2").value;
	elementos2 = elementos2.replaceAll(";", ",");
	var all_elem2 = elementos2.split(",");

	var interseccao = []

	for(var x = 0; x < all_elem1.length; x++){
		for(var y = 0; y < all_elem2.length; y++){
			if(all_elem1[x] == all_elem2[y]){
                interseccao.push(all_elem1[x])
            }
		}
	}

	var uniao = [...new Set(all_elem1.concat(all_elem2))];

	document.getElementById("res_uni").innerHTML = nome_conjunto1 + "∪" + nome_conjunto2 + " = {" + uniao + "}"
	document.getElementById("res_inter").innerHTML = nome_conjunto1 + "∩" + nome_conjunto2 + " = {" + interseccao + "}"

	document.getElementById("btn_res").style.display = "none"
	document.getElementById("todos_conjuntos").style.display = "none";
	document.getElementById("resul").style.display = "flex";
}

function voltar() {
	document.getElementById("input_conj1").value = ""
	document.getElementById("input_conj2").value = ""
	document.getElementById("input_part1").value = ""
	document.getElementById("input_part2").value = ""
	document.getElementById("btn_res").style.display = "flex"
	document.getElementById("todos_conjuntos").style.display = "flex";
	document.getElementById("resul").style.display = "none";
}
