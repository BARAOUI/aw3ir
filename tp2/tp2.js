
function validation()
{
 document.getElementById("error").innerHTML= "";
     if(document.getElementById("Nom").value.length < 5)
{
         document.getElementById("error").innerHTML = "La saisie de votre Nom est obligatoire" ;
    return false
}

    if(document.getElementById("Prenom").value.length<5)
{
        document.getElementById("error").innerHTML = "La saisie de votre Prénom est obligatoire" ;
    return false

}

if(document.getElementById("Date").value.length<5)
{
        document.getElementById("error").innerHTML = "La saisie de votre date de naissance est obligatoire" ;
    return false
 
}

const dateNaissance = new Date(document.getElementById("Date").value);
    if (dateNaissance.getTime() > Date.now()) {
      document.getElementById("Error").innerHTML = "Insérez  SVP une date valide";
      return false;
    }

    if(document.getElementById("Adresse").value.length < 5)
    {
         document.getElementById("Adresse");  
        document.getElementById("error").innerHTML = "La saisie de votre adresse est obligatoire" ;
        return false
    }

    if(document.getElementById("Mail").value.length < 5 || document.getElementById("Mail").value.indexOf("@") == -1)
    {
        document.getElementById("Mail");
        document.getElementById("error").innerHTML = document.getElementById("error").innerHTML + " Votre adresse email doit contenir un @";
   return false;
    }


    if(document.getElementById("error").innerHTML == ""){
        document.getElementById("resultat").innerHTML= "Bienvenue </d>" + document.getElementById("Nom").value;
        return true;
    }

}

