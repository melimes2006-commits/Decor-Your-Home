function inscription(){

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let telephone = document.getElementById("telephone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let message = document.getElementById("message");


    // vérifier champs vides

    if( nom === "" || prenom === "" || telephone === "" || email === "" || password === "" ){

        message.innerText = "Veuillez remplir tous les champs ❌";

        return;
    }


    let telPattern = /^(05|06|07)[0-9]{8}$/;

    if(!telPattern.test(telephone)){

        message.innerText = "Numero invalide ❌";

        return;
    }


    // vérifier email

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|fr|dz)$/;

    if(!email.match(emailPattern)){

        message.innerText = "Email invalide ❌";

        return;
    }


    // vérifier mot de passe

    if(password.length < 4){

        message.innerText = "Mot de passe trop court (min 4 caractères) ❌";

        return;
    }


    // enregistrer

    localStorage.setItem("nom", nom);

    localStorage.setItem("prenom", prenom);

    localStorage.setItem("telephone", telephone);

    localStorage.setItem("email", email);

    localStorage.setItem("password", password);


    message.innerText = "Inscription réussie ✅";

}
function connexion(){

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let message = document.getElementById("message");


    // récupérer données enregistrées

    let savedEmail = localStorage.getItem("email");

    let savedPassword = localStorage.getItem("password");


    // vérifier champs vides

    if(email === "" || password === ""){

        message.innerText = "Veuillez remplir tous les champs ❌";

        return;
    }


    // vérifier connexion
    console.log(savedPassword);
    console.log(password);
    if(email === savedEmail && password === savedPassword){

        message.innerText = "Connexion réussie ✅";

    }

    else{

        message.innerText = "Email ou mot de passe incorrect ❌";

    }


}