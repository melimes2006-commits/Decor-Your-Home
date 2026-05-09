let produits = [
    {
        nom: "Canapé beige",
        prix: "180000 DA",
        categorie: "canape",
        image: "../images/canape4.jpg"
    },
    {
        nom: "Canapé gris clair",
        prix: "155000 DA",
        categorie: "canape",
        image: "../images/canape2.jpg"
    },
     {
        nom: "Canapé gris fonce",
        prix: "205000 DA",
        categorie: "canape",
        image: "../images/canape3.jpg"
    },
     {
        nom: "Canapé caramel clair",
        prix: "135000 DA",
        categorie: "canape",
        image: "../images/canape5.jpg"
    },
     {
        nom: "Canapé beige rose",
        prix: "145000 DA",
        categorie: "canape",
        image: "../images/canape6.jpg"
    },
     {
        nom: "Canapé rose pourde",
        prix: "147000 DA",
        categorie: "canape",
        image: "../images/canape1.jpg"
    },
    
    {
        nom: "Table moderne",
        prix: "85000 DA",
        categorie: "table",
        image: "../images/table5.jpg"
    },
    {
        nom: "Table avec chaises",
        prix: "110000 DA",
        categorie: "table",
        image: "../images/table1.jpg"
    },
      {
        nom: "Table ronde noire",
        prix: "85000 DA",
        categorie: "table",
        image: "../images/table2.jpg"
    },
      {
        nom: "Table creme moderne",
        prix: "111000 DA",
        categorie: "table",
        image: "../images/table6.jpg"
    },
      {
        nom: "Table bois moderne",
        prix: "97750 DA",
        categorie: "table",
        image: "../images/table3.jpg"
    },
    {
        nom: "Rangement bois",
        prix: "86000 DA",
        categorie: "rangement",
        image: "../images/rangement5.jpg"
    },
    {
        nom: "Bibliotheque moderne",
        prix: "98000 DA",
        categorie: "rangement",
        image: "../images/rangement3.jpg"
    },
    {
        nom: "Grande bibliotheque moderne",
        prix: "156000 DA",
        categorie: "rangement",
        image: "../images/rangement1.jpg"
    },
     {
        nom: "Rangement salle de bain",
        prix: "100000 DA",
        categorie: "rangement",
        image: "../images/rangement4.jpg"
    },
    {
        nom: "Lit moderne",
        prix: "145000 DA",
        categorie: "lit",
        image: "../images/lit1.jpg"
    },
    {
        nom: "Lit luxe",
        prix: "160000 DA",
        categorie: "lit",
        image: "../images/lit2.jpg"
    },
      {
        nom: "Lit luxe",
        prix: "160000 DA",
        categorie: "lit",
        image: "../images/lit6.jpg"
    }
];

function afficherProduits(categorie){

    let zone = document.getElementById("liste-produits");

    zone.innerHTML = "";

    for(let i = 0; i < produits.length; i++){

        if(categorie === "tous" || produits[i].categorie === categorie){

            zone.innerHTML += `
                <div class="carte-produit">
                    <img src="${produits[i].image}" alt="${produits[i].nom}">
                    <h3>${produits[i].nom}</h3>
                    <p>${produits[i].prix}</p>
                    <a href="commande.html">Commander</a>
                </div>
            `;
        }
    }
}

afficherProduits("tous");