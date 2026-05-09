function commander(){

    let nom =
    document.getElementById("nom").value;

    let telephone =
    document.getElementById("telephone").value;

    let adresse =
    document.getElementById("adresse").value;

    let produit =
    document.getElementById("produit").value;

    let message =
    document.getElementById("messageCommande");


    if( nom === "" || telephone === "" || adresse === "" ){

        message.innerText =
        "Veuillez remplir tous les champs ❌";

        return;
    }


    alert(
        "Produit ajouté : " +
        produit +
        " ✅"
    );

    message.innerText =
    "Commande envoyée avec succès ✅";
}