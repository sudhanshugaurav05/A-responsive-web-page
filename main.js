const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".container .letter-s", {
    duration: 1000,
    delay: 750,
});

ScrollReveal().reveal(".container img", {
    duration: 1000,
    delay: 1300,
});

ScrollReveal().reveal(".container .text_left", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1800,
});

ScrollReveal().reveal(".container .text_right", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1800,
});

ScrollReveal().reveal(".container .explore", {
    duration: 1000,
    delay: 2300,
});

ScrollReveal().reveal(".container .print", {
    duration: 1000,
    delay: 4000,
});

ScrollReveal().reveal(".container .catalog", {
    duration: 1000,
    delay: 3300,
});

ScrollReveal().reveal(".container .h5", {
    duration: 1000,
    interval: 500,
    delay: 2500,
});

ScrollReveal().reveal(".footer p", {
    duration: 1000,
    delay: 5500,
});

