const video = document.getElementById('bg-video');
video.playbackRate = 0.75;

const start_button = document.getElementById("start-btn")

const gradient_overlay = document.getElementById("gradient-overlay")
const main_content = document.getElementById("main-content")

// navigation cards
const game_mechanics_card = document.getElementById("game-mechanics-card-btn")
const development_card = document.getElementById("development-card-btn")
const walkthrough_card = document.getElementById("walkthrough-card-btn")
const story_card = document.getElementById("story-card-btn")
const gallery_card = document.getElementById("gallery-card-btn")


//Eventlisterenrs
start_button.addEventListener("click", showMainPage);

// game_mechanics_card.addEventListener("click", showGameMehanics);
// development_card.addEventListener("click", showDevelopment);
// walkthrough_card.addEventListener("click", showWalkthrough);
// story_card.addEventListener("click", showStory);
// gallery_card.addEventListener("click", showGallery);


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