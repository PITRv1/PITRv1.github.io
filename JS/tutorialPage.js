function openImage(src) {
    const viewer = document.getElementById('fullscreen-viewer');
    const img = document.getElementById('fullscreen-img');
    img.src = src;
    viewer.classList.remove('hidden-wo-display');
  }
  
  function closeImage() {
    document.getElementById('fullscreen-viewer').classList.add('hidden-wo-display');
  }