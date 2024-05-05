var enteredColors = []; 
function SetDaColor() {
    var color = document.getElementById("colorTyper").value;
    document.getElementById("diverseOne").style.backgroundColor = color;
    enteredColors.unshift(color);
    updateDiverseOne();
}
function updateDiverseOne() {
    document.getElementById("diverseOne").innerText = enteredColors.join(" ");
}

function RandomDisplay() {
    var color = getRandomColorName();
    document.getElementById("diverseTwo").innerText = color;
    document.getElementById("diverseTwo").style.backgroundColor = color;
}


function Resetted() {
    enteredColors = []; 
    document.getElementById("diverseOne").innerText = '.';
    document.getElementById("diverseTwo").innerText = '.';
    document.getElementById("diverseOne").style.backgroundColor = 'initial';
    document.getElementById("diverseTwo").style.backgroundColor = 'initial';
}



function getRandomColorName() {
    var colorNames = ['blue', 'red', 'yellow', 'green', 'orange', 'purple', 'cyan', 'magenta', 'pink', 'brown', 'black', 'white', 'violet', 'gold', 'DeepPink', 'RebeccaPurple', 'chartreuse', 'olive', 'DodgerBlue', 'DarkBlue', 'bisque', 'peru', 'GhostWhite', 'DarkSlateGray', 'khaki'];
    var randomIndex = Math.floor(Math.random() * colorNames.length);
    return colorNames[randomIndex];
}
