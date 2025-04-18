const video = document.getElementById('bg-video');
video.playbackRate = 0.75;

const start_button = document.getElementById("start-btn")

const gradient_overlay = document.getElementById("gradient-overlay")
const main_content = document.getElementById("main-content")



start_button.addEventListener("click", () => {
    gradient_overlay.classList.remove("hidden");
    main_content.classList.remove("hidden");

    document.body.classList.remove("noscroll");

    start_button.classList.add("hidden");
})