document.addEventListener("DOMContentLoaded", function(event) { 
	console.log('Youhou');

// créer une instance de l'objet XMLHttpRequest
xhr = new XMLHttpRequest();

// Déclarer la fonction de rappel à exécuter lorts d'un changement de status de l'instance xhr
xhr.onreadystatechange = function() {
	if(xhr.readyState === 0) { 
		console.log('Requete non initialisée');
	}
	if(xhr.readyState === 1) { 
		console.log('Connexion au serveur établie');
	}
	if(xhr.readyState === 2) { 
		console.log('Requête reçue');
	}
	if(xhr.readyState === 3) { 
		console.log('Traitement de la requête');
	}
	if(xhr.readyState === 4  && xhr.status == 200) {
		console.log('Requête terminée et réponse prête');
		//document.getElementById('reponse').innerHTML = xhr.responseText;

		var xml = xhr.responseXML;
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
		    console.log(nom);
		    $('#reponse').append('<option value="' + nom + '">' + nom + '</option')
		}
	 }
	
};


xhr.open('GET', 'test.xml', true);
xhr.send();


  //do work
});

/*

}*/


