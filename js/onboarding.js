const onboarding_btn = document.querySelector(".btn_group .register_btn");
const onboarding_container = document.querySelector(".onboarding_container");
const onboarding_overlay = document.querySelector(".onboarding_overlay");
const steps = document.querySelectorAll(".onboarding_container .step");
const steps_container = document.querySelector(".onboarding_container .steps");
const next_btn = document.querySelector(".onboarding_container .skip_btn");

let step_position = 0;

onboarding_btn.addEventListener("click", () => {
    onboarding_container.classList.add("active");
    onboarding_overlay.classList.add("active");
});

next_btn.addEventListener("click", function (e) {
    step_position += steps[0].offsetWidth;
    steps_container.style.transform = 'translateX(-${step_position}px)';
});