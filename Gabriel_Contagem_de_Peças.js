let listaDePeças = ["Peça1", "Peça2", "Peça3", "Peça4", "Peça5", "Peça6", "Peça7", "Peça8", "Peça9", "Peça10"];
let quantidaDePeças = listaDePeças.length;
if (quantidaDePeças < 10) {
	listaDePeças.push("Total de peças");
    console.log(listaDePeças);
    console.log(quantidaDePeças);
} else {
	console.log("Não tem capacidade suficiente para inserir mais peças");
}
