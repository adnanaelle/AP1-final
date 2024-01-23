



let slideIndex = 0;
carousel();

function carousel() {
  let i;
  const slides = document.querySelectorAll('.slides img');
  
  // Masque toutes les images
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  
  // Affiche l'image active
  slides[slideIndex - 1].style.display = 'block';
  
  // Change d'image toutes les 2 secondes (ajustable)
  setTimeout(carousel, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
  // Votre code JavaScript à exécuter une fois que le DOM est chargé
  // Par exemple :
  console.log('Le DOM est chargé.');
});
