const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('.btn');
const span = document.querySelector('.color');

function mainAction() {
    let hexColors = '#';
    for (let i = 0; i < 6; i++) {
        hexColors += hex[randomColor()]
    }
    document.body.style.backgroundColor = hexColors;
    span.innerHTML = hexColors
}

function randomColor() {
    return Math.floor(Math.random() * hex.length);
}





btn.addEventListener('click', mainAction)