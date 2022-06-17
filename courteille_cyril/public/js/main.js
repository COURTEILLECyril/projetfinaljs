//Fonction Boutton changement de couleur de bg, de size et de display de la div choisis ton personnage

function bouttondiv() {
    document.getElementById("contcyc").style.backgroundColor = "grey";
    document.getElementById("divbgs").style.height = "500px";
    document.getElementById("divbgs").style.width = "600px";
    document.getElementById("contcyc").style.display = "block";

    // Timmer de 5 sec avant execution de la 2e fonction
    const cycb = setTimeout(chooseb, 5000);

    // 2e fonction qui recache la div
    function chooseb() {
        document.getElementById("contcyc").style.display = "none";
    }
}



//Fonction boutton changement de police
function bouttonpolice() {
    document.body.style.fontFamily = "Verdana";

    // timmer de 5 sec avant execution de la 2e fonction
    const cycb = setTimeout(policeback, 5000);

    // 2e fonction qui remet le font de base
    function policeback() {
        document.body.style.fontFamily = "Courier New";
    }
}


//Fonction boutton aggrandissement de texte
function bouttonsize() {
  document.getElementById("textgd").style.fontSize = "32px";

  // timmer de 5 sec avant execution de la 2e fonction
  const cycb = setTimeout(fontback, 5000);

  // 2e fonction qui remet le font de base
  function fontback() {
      document.getElementById("textgd").style.fontSize = "16px";
  }
}

//Fonction lien vers page challenges
function switchpagecha() {
    window.location.href = './public/html/challenge.html';
}


//Fonction changement d'image quand la souris passe sur l'image
function blueshell() {
    document.getElementById("bs1").src="./public/img/bs2.jpg";

    // attente de 2 secondes avant l'execution de la fonction "blueshellback"
    const bsb = setTimeout(blueshellback, 2000);
    
    //Changement de l'image 2 vers l'image 1
    function blueshellback(){
        document.getElementById("bs1").src= "./public/img/favicon.webp";
    }
}

// Fonction disparition + remplacement de texte
function textdisp() {
    document.getElementById("textdis").style.display = "none";
    document.getElementById("ggs").style.display = "block"

    // timmer de 5 sec avant execution de la 2e fonction
    const cycb = setTimeout(secretback, 5000);

    // 2e fonction qui remet le font de base
    function secretback() {
        document.getElementById("textdis").style.display = "block";
        document.getElementById("ggs").style.display = "none";
    }
}
