document.addEventListener("DOMContentLoaded", function(event) { 
	console.log('Youhou');

// créer une instance de l'objet XMLHttpRequest
xhr = new XMLHttpRequest();

// Déclarer la fonction de rappel à exécuter lorts d'un changement de status de l'instance xhr
xhr.onreadystatechange = function() {

	if(xhr.readyState === 4  && xhr.status == 200) {
		console.log('Requête terminée et réponse prête');
		//document.getElementById('reponse').innerHTML = xhr.responseText;
		// declarer la variable xml dans le scope Global
		xml = xhr.responseXML;
		// et non dans le scope de la fonction
		// var xml = .....
		console.log('reponseXml brute', xml);
		var personnes = xml.getElementsByTagName("personne");// retourne une instance d'une class html 
		//collection du DOM : https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName
		console.log('xml.getElementsByTagName("personne")', personnes);

		for(var i = 0; i < personnes.length; i++) {
		    var personne = personnes[i];
		    console.log('var personne = personnes['+i+'];', personne);
		    var nodeNom = personne.getElementsByTagName("nom");
		    console.log('var nodeNom = personne.getElementsByTagName("nom");', nodeNom);
		    var nom = nodeNom.item(0).childNodes[0].nodeValue;
		    var id = personne.getAttribute("id");
		    console.log(nom, id);
		    $('#reponse').append('<option value="' + id + '">' + nom + '</option');

		}
		$('#reponse').click(function(){
			var id = $(this).val();
			console.log(id, xml);
			var elementPersonne = xml.getElementById(id);
			console.log(elementPersonne);
			var HTMLCollectionNom = elementPersonne.getElementsByTagName("nom");
			var nom = HTMLCollectionNom.item(0).childNodes[0].nodeValue;

			var HTMLCollectionPrenom = elementPersonne.getElementsByTagName("prenom");
			var prenom = HTMLCollectionPrenom.item(0).childNodes[0].nodeValue;

		    var HTMLCollectionAge = elementPersonne.getElementsByTagName("age");
		    var age = HTMLCollectionAge.item(0).childNodes[0].nodeValue;
		    
		    var HTMLCollectionFonction = elementPersonne.getElementsByTagName("fonction");
		    var fonction = HTMLCollectionFonction.item(0).childNodes[0].nodeValue;

		    $('#nom').text(nom);
		    $('#prenom').text(prenom);
		    $('#age').text(age);
		    $('#fonction').text(fonction);

		})
	 }
	
};


xhr.open('GET', 'test.xml', true);
xhr.send();


 
});

/*

}*/


