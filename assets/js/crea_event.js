// Récupère le conteneur de l'onboarding, les points d'onboarding et les étapes
const event_dot = document.querySelectorAll('.event_dot');
const form_group = document.querySelectorAll('.form_group');

// Récupère les boutons "Suivant"
const next_btn = document.querySelectorAll('.next_btn');
const previous_btn = document.querySelector('.prev_btn');

// Affiche le premier écran de crea
event_dot[0].classList.add('active');
form_group[0].classList.add('active');

// Ajoute un écouteur d'événements sur les boutons "Suivant" pour passer à l'étape suivante
next_btn.forEach((button) => {
    button.addEventListener('click', () => {
        // Récupère l'index de l'étape active
        const activeIndex = [...steps].findIndex((step) => step.classList.contains('active'));

        // Masque l'étape active
        form_group[activeIndex].classList.remove('active');
        event_dot[activeIndex].classList.remove('active');

        // Affiche l'étape suivante
        form_group[activeIndex + 1].classList.add('active');
        event_dot[activeIndex + 1].classList.add('active');
    });
});

// Ajoute un écouteur d'événements sur le lien "précédent" pour passer à l'étape précedente
previous_btn.addEventListener('click', () => {
    // Récupère l'index de l'étape active
    const activeIndex = [...steps].findIndex((step) => step.classList.contains('active'));

    // Masque l'étape active
    form_group[activeIndex].classList.remove('active');
    event_dot[activeIndex].classList.remove('active');

    // Affiche l'étape suivante
    form_group[activeIndex - 1].classList.add('active');
    event_dot[activeIndex - 1].classList.add('active');
});
