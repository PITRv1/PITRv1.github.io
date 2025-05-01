const video = document.getElementById('bg-video');
video.playbackRate = 0.75;

const start_button = document.getElementById("start-btn")

const gradient_overlay = document.getElementById("gradient-overlay")
const main_content = document.getElementById("main-content")

//Eventlisterenrs
start_button.addEventListener("click", showMainPage);

// Auto scroll to the top on reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

// Start sequence logic
function showMainPage(){
    gradient_overlay.classList.remove("hidden");
    main_content.classList.remove("hidden");

    document.body.classList.remove("noscroll");

    start_button.classList.add("hidden");
}

// Content switcher
function showView(buttonId,viewId) {
    document.querySelectorAll('.navigation-card').forEach(card => {
        card.classList.remove('selected');
      });

    console.log(buttonId);
    
    console.log(document.getElementById(buttonId));
    
    try{
        document.getElementById(buttonId).classList.add('selected');
    }catch{}
    
    document.querySelectorAll('.changing').forEach(view => {    
      view.classList.remove('visible');
    });

    document.getElementById(viewId).classList.add('visible');
}

function openImage(src) {
  const viewer = document.getElementById('fullscreen-viewer');
  const img = document.getElementById('fullscreen-img');
  img.src = src;
  viewer.classList.remove('hidden-wo-display');
}

function closeImage() {
  document.getElementById('fullscreen-viewer').classList.add('hidden-wo-display');
}