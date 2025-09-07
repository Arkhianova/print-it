const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélectionner l'élément HTML flèche gauche
const left = document.querySelector('.arrow_left');

// Sélectionner l'élément HTML flèche droite 
const right = document.querySelector('.arrow_right');

// Ajouter un écouteur d'événement 'click' à la flèche gauche
left.addEventListener('click', () => {
  currentImg--;
  console.log('currentImg vaut : ' + currentImg);
  updateBanner();
  toggleSelected();
})

// Ajouter un écouteur d'événement 'click' à la flèche droite
right.addEventListener('click', () => {
   currentImg++;
    console.log('currentImg vaut : ' + currentImg);
  updateBanner();
  toggleSelected();
})

//récuperer le nbre d'élément(nbr img) dans le tableau slides
let slidesElementsNb = slides.length;


function createDotElement () {
  //selectionne la div.dots qui contiendra les points div.dot
  const dots = document.querySelector(".dots");
  //créer une boucle qui se répète autant de fois qu'il y a d'images dans slides
    for (let i = 0; i < slidesElementsNb; i++) {
    //crée un élément html de type div
    const dot = document.createElement("div");
    //sur l'élément div (dans la variable dot), j'ajoute la classe dot 
    dot.classList.add("dot");
    //dans la div dots j'atoute cet élément dot
    dots.appendChild(dot);
  }
}
//appel de la fonction pour créer les points
createDotElement();

// Index de la diapositive affichée (0 = première image du tableau slides).
let currentImg = 0;

function toggleSelected () {
  // Récupère tous les enfants (les points) de la div.dots
  const dots = document.querySelector(".dots").children;

  // Parcourt tous les points
  for (let i = 0; i < dots.length; i++) {
    // Si l’index du point correspond à l’image affichée (currentImg),
    // on ajoute la classe CSS "dot_selected" pour le surligner
    // Sinon, on enlève cette classe
    i === currentImg 
      ? dots[i].classList.add("dot_selected") 
      : dots[i].classList.remove("dot_selected");
  }
}
// Appel initial pour afficher le point sélectionné au chargement de la page
toggleSelected();

// Sélectionner l'img de la bannière, sur laquelle on va modifier l'url, le src
const bannerImg = document.querySelector('.banner-img');

// Sélectionner l'élément HTML p de la bannière (le paragraphe de texte)
const bannerText = document.querySelector('#banner p');

//permet de mettre à jour l'image et le texte de la bannière
function updateBanner () {
  bannerImg.src = `./assets/images/slideshow/${slides[currentImg].image}`;
  bannerText.innerHTML = slides[currentImg].tagLine;
}









