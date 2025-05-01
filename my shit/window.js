const file_chooser = document.getElementById("file-chooser");
const title_bar = document.getElementById("titlebar");

const colors = {
    "yellow":"rgb(165, 155, 10)",
    "red":"rgb(117, 35, 35)",
    "green":"rgb(17, 107, 17)"
}

let current_file = null

function open_file(file_name) {
    let file = document.getElementById(file_name.split(".")[0]);

    if (file) {
        file_chooser.style.display = "none";
        file.style.display = "block";

        current_file = file

        if (file_name.includes(".accdb")) {
            title_bar.style.backgroundColor = colors.red;
        } else {
            title_bar.style.backgroundColor = colors.green;
        }
    }
}

function close_file() {
    if (current_file) {
        current_file.style.display = "none";
        file_chooser.style.display = "block";

        current_file = null;
        title_bar.style.backgroundColor = colors.yellow;
    }
}

let window_contents = document.getElementsByClassName("window-content");

for (let i=0; i < window_contents.length; i++) {
    window_contents[i].innerHTML = "<button onclick='close_file()'>Back</button>"+window_contents[i].innerHTML;
}


// window_contents.forEach(win => {
//     win.innerHTML = "<button onclick='close_file()'>Back</button>"+file.innerHTML;
// });
