window.onload = function () {   
    console.log("DOM ready!");
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted!");
        const date = document.querySelector("#date").value;
        
        if (document.getElementById("Nom").value.length < 5) {
            document.querySelector(".modal-title").textContent = "Erreur"
            document.querySelector(".modal-body").innerHTML = "Votre Nom doit être supérieure à 5 caractères ";
            myModal.show();
        }

        else if (document.getElementById("Prenom").value.length < 5) {
            document.querySelector(".modal-title").textContent = "Erreur"
            document.querySelector(".modal-body").innerHTML = "Votre Prenom doit être supérieure à 5 caractères";
            myModal.show();
        }

        else if (document.getElementById("Adresse").value.length < 5){
            document.querySelector(".modal-title").textContent = "Erreur"
            document.querySelector(".modal-body").innerHTML = "Votre Adresse doit être supérieure à 5 caractères";
            myModal.show();
        }
        
        else if (document.getElementById("email").value.length < 5) {
            document.querySelector(".modal-title").textContent = "Erreur"
            document.querySelector(".modal-body").innerHTML = "Votre email doit être supérieure à 5 caractères ";
        myModal.show();
        }
    
        else if (validateDate(date) == false) {
            document.querySelector(".modal-title").textContent = "Erreur"
            document.querySelector(".modal-body").innerHTML = "Entrer votre Date De Naissance";
            myModal.show();
        }
  
        else {
            console.log('OK');
            document.querySelector(".modal-title").textContent = " Bienvenue à USPN  " + document.getElementById("Nom").value;
            document.querySelector(".modal-body").innerHTML = " Vous etes né(e) :" + document.getElementById("date").value + " et vous habitez à ";
            document.querySelector(".modal-body2").innerHTML = '<a href="http://maps.google.com/maps?q=Paris"><img src="https://maps.googleapis.com/maps/api/staticmap?markers=Paris&zoom=9&size=200x100&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/> </a>';
            contactStore.add(document.getElementById("Nom").value, document.getElementById("Prenom").value, document.getElementById("date").value, document.getElementById("Adresse").value, document.getElementById("email").value);
		    localStorage.setItem('contactList', JSON.stringify(contactStore.getList()));
            document.querySelector('#gps').addEventListener("click", function (event) {
                getLocation();
            });
            AfficherList();
            myModal.show();
            
        }
    }
    )
    
  }
  
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  
function validateDate() {
    const inputDate = document.getElementById('date').value;
    let dateNaissance = new Date(inputDate);
    let dateNaissanceTimestamp = dateNaissance.getTime();
    let nowTimestamp = Date.now();
    return (dateNaissanceTimestamp < nowTimestamp)
}
  

function calcNbChar(id) {
        document.querySelector(`#Nom + span`).textContent = document.querySelector(`#Nom`).value.length;
        document.querySelector(`#Prenom + span`).textContent = document.querySelector(`#Prenom`).value.length;
        document.querySelector(`#date + span`).textContent = document.querySelector(`#date`).value.length;
        document.querySelector(`#Adresse + span`).textContent = document.querySelector(`#Adresse`).value.length;
        document.querySelector(`#email + span`).textContent = document.querySelector(`#email`).value.length;
}
  
function AfficherList() {
    
        var contactList = JSON.parse(localStorage.getItem("contactList"));
        for (var index in contactList) {
          document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
            
            '<tr>'+
            '<td>'+ contactList[index].Nom +'</td>'+
            '<td>'+ contactList[index].Prenom +'</td>'+
            '<td>'+ contactList[index].date +'</td>'+
            '<td>'+ contactList[index].Adresse +'</td>'+
            '<td><a href=mailto:>'+ contactList[index].email +'</a></td>'+
          '</tr>'
        }
 };
    

