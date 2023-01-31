// Récupère le conteneur de l'onboarding, les points d'onboarding et les étapes
const onboardingContainer = document.querySelector('.onboarding_container');
const onboardingDots = document.querySelectorAll('.onboarding_dot');
const steps = document.querySelectorAll('.step');

// Récupère les boutons "Suivant"
const nextButtons = document.querySelectorAll('.onboarding_next_btn');
const secondNextButton = document.querySelector('.onboarding_second_next_btn');

// Récupère le lien "passer"
const skipLink = document.querySelector('.step a');

// Affiche le premier écran d'onboarding
onboardingContainer.classList.add('active');
onboardingDots[0].classList.add('active');
steps[0].classList.add('active');

// Ajoute un écouteur d'événements sur les boutons "Suivant" pour passer à l'étape suivante
nextButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Récupère l'index de l'étape active
        const activeIndex = [...steps].findIndex((step) => step.classList.contains('active'));

        // Masque l'étape active
        steps[activeIndex].classList.remove('active');
        onboardingDots[activeIndex].classList.remove('active');

        // Affiche l'étape suivante
        steps[activeIndex + 1].classList.add('active');
        onboardingDots[activeIndex + 1].classList.add('active');
    });
});

// Ajoute un écouteur d'événements sur le bouton "Suivant" du dernier écran pour masquer l'écran d'onboarding
secondNextButton.addEventListener('click', () => {
    onboardingContainer.classList.remove('active');
});

// Ajoute un écouteur d'événements sur le lien "passer" pour passer à l'étape suivante
skipLink.addEventListener('click', () => {
    // Récupère l'index de l'étape active
    const activeIndex = [...steps].findIndex((step) => step.classList.contains('active'));

    // Masque l'étape active
    steps[activeIndex].classList.remove('active');
    onboardingDots[activeIndex].classList.remove('active');

    // Affiche l'étape suivante
    steps[activeIndex + 1].classList.add('active');
    onboardingDots[activeIndex + 1].classList.add('active');
});
// on va proposer à l'utilisateur d'accéder à sa position on va convertir la longitude/lattitude en nom de lieu
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;

        document.querySelector("input[type='location']").value = lat + ", " + lng;
    });
} else {
    // Geolocation is not supported by the browser
    console.error("Geolocation is not supported by this browser.");
}
