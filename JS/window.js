const file_chooser = document.getElementById("file-chooser");
const titlebar = document.getElementById("titlebar");
const window_contents = document.getElementsByClassName("window-content");
const titlebar_title = document.getElementById("titlebar-title");

const colors = {
    "yellow":"rgb(165, 155, 10)",
    "red":"rgb(117, 35, 35)",
    "green":"rgb(17, 107, 17)"
}

let current_file = null

for (let i=0; i < window_contents.length; i++) {
    window_contents[i].innerHTML = "<button onclick='close_file()'>Back</button>"+window_contents[i].innerHTML;
}

function open_file(file_name) {
    let file = document.getElementById(file_name.split(".")[0]);

    if (file) {
        file_chooser.style.display = "none";
        file.style.display = "block";

        current_file = file

        if (file_name.includes(".accdb")) {
            titlebar.style.backgroundColor = colors.red;
        } else {
            titlebar.style.backgroundColor = colors.green;
        }
        titlebar_title.textContent = file_name;
    }
}

function close_file() {
    if (current_file) {
        current_file.style.display = "none";
        file_chooser.style.display = "block";

        current_file = null;
        titlebar.style.backgroundColor = colors.yellow;
        titlebar_title.textContent = "File viewer"
    }
}