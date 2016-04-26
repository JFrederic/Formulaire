


















/*


var nom = document.getElementById('nom');
var prenom = document.getElementById('prenom');
var email = document.getElementById('mail');

function verifMail(champ)
{



   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

     if(!regex.test(champ.value))
     {


       champ.style.backgroundColor = "#ed9090";
       return false;
     }
    else
    {
      champ.style.backgroundColor = "";

      return true;
    }



}


function verifChiffre(champ){

  var chiffre = parseInt(champ.value);


  if(isNaN(chiffre))
  {

    champ.style.backgroundColor = "#ed9090";
    return false;
  }
  else{
    champ.style.backgroundColor = "";

    return true;
  }

}

function empty(champ){

var textarea = document.getElementById('message');
var msgErreurNom = document.getElementById('msgErreurNom');
var msgErreurPrenom = document.getElementById('msgErreurPrenom');
var msgErreurMail = document.getElementById('msgErreurMail');
var msgErreurTel = document.getElementById('msgErreurTel');
var msgErreurMsg = document.getElementById('msg');

  if(champ.value == "" || textarea.value == ""){


      msgErreurNom.innerText = "Veuillez entrez votre nom svp.";

      champ.style.backgroundColor = "#ed9090";

      return false;
  }
  else{
    champ.style.backgroundColor = "";
    msgErreurNom.innerText = "";


    return true;
  }
}

*/
