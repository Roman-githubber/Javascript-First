const colors = ['red', 'yellow', 'green', 'orange', 'violet', 'pink', 'blue'];
const btn = document.getElementById('btn');
const span = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomnumber = Randomnumber();
    document.body.style.backgroundColor = colors[randomnumber];
    span.innerHTML = colors[randomnumber];
})

function Randomnumber() {
    return Math.floor(Math.random() * colors.length)
}