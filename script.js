var xhr = new XMLHttpRequest();
xhr.open('GET', 'test.xml' true);
xhr.send();

var xml = request.responseXML;
var personnes = xml.getElementsByTagName("personne");
for(var i = 0; i < personnel.length; i++) {
    var user = personnel[i];
    var names = user.getElementsByTagName("name");
    for(var j = 0; j < names.length; j++) {
        alert(names[j].childNodes[0].nodeValue);
    }
}


