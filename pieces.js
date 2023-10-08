const reponse= await fetch("pieces-autos.json");
const pieces= await reponse.json();
// Récupération de l'élément du DOM qui accueillera les fiches
const sectionFiches = document.querySelector(".fiches");



for (let i = 0; i < pieces.length; i++) {

    const article = pieces[i];

    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");

    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    pieceElement.appendChild(imageElement);

    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    pieceElement.appendChild(nomElement);

    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${article.prix <=35 ? "€" : "€€€"})`;
    pieceElement.appendChild(prixElement);

    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
    pieceElement.appendChild(categorieElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "(Pas de description pour le moment)";
    pieceElement.appendChild(descriptionElement);

    const disponibiliteElement = document.createElement("p");
    disponibiliteElement.innerText = article.disponibilite ? "en stock" : "rupture de stock";
    pieceElement.appendChild(disponibiliteElement);

    sectionFiches.appendChild(pieceElement);

}

const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
     });
     console.log(piecesOrdonnees);
 });

 const boutonDecroissant = document.querySelector(".btn-decroissant");
 boutonDecroissant.addEventListener("click", function () {
     const piecesOrdonnees = Array.from(pieces);
     piecesOrdonnees.sort(function (a, b) {
         return b.prix - a.prix;
      });
      console.log(piecesOrdonnees);
  });
 

 const boutonFiltrer=document.querySelector(".btn-filtrer");
 boutonFiltrer.addEventListener("click", function(){
    const piecesFiltrees=pieces.filter(function(piece) {
        return piece.prix <=35;
    });
    console.log(piecesFiltrees);
});


const boutonNoDesc=document.querySelector(".btn-nodesc");
boutonNoDesc.addEventListener("click", function(){
   const piecesFiltrees=pieces.filter(function(piece) {
       return piece.description;
   });
   console.log(piecesFiltrees);
});

