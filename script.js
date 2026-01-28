const links = document.querySelectorAll(".links a");

links.forEach(link => {
    link.addEventListener("mousedown", () => {
        link.style.transform = "scale(0.96)";
    });

    link.addEventListener("mouseup", () => {
        link.style.transform = "scale(1)";
    });

    link.addEventListener("mouseleave", () => {
        link.style.transform = "scale(1)";
    });
});
