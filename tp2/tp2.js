function validation()
{
 document.getElementById("error").innerHTML= "";
     if(document.getElementById("Nom").value.length < 5)
{
         document.getElementById("error").innerHTML = "La saisie de votre nom est obligatoire" ;
    return false
}

    if(document.getElementById("Prenom").value.length<5)
{
        document.getElementById("error").innerHTML = "La saisie de votre prénom est obligatoire" ;
    return false

}

if(document.getElementById("Date").value.length<5)
{
        document.getElementById("error").innerHTML = "La saisie de votre date de naissance est obligatoire" ;
    return false
 
}

const dateNaissance = new Date(document.getElementById("Date").value);
    if (dateNaissance.getTime() > Date.now()) {
      document.getElementById("Error").innerHTML = "Veuillez insérer une date valide";
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
        document.getElementById("error").innerHTML = document.getElementById("error").innerHTML + "Il faut bien saisir votre adresse mail contenant @";
   return false;
    }


    if(document.getElementById("error").innerHTML == ""){
        document.getElementById("resultat").innerHTML= "Formulaire validé Bienvenue </d>" + document.getElementById("Nom").value;
        return true;
    }

}
