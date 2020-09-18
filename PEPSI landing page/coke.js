const pepsi1 = document.getElementById('pepsi1');
const pepsi2 = document.getElementById('pepsi2');
const pepsi3 = document.getElementById('pepsi3');
const pic = document.getElementById('pic');

document.body.style.transition = 'all 2s linear';
pepsi1.addEventListener('click', function () {

    pic.style.background = 'url(pepsi001.png)center/cover no-repeat';
    document.body.style.background = 'rgb(64, 83, 255)';
    pic.style.transition = 'all 2s linear'
})
pepsi2.addEventListener('click', function () {

    pic.style.background = 'url(pepsi002.png)center/cover no-repeat';
    document.body.style.background = 'rgb(255, 113, 113)';
    pic.style.transition = 'all 2s linear'
})
pepsi3.addEventListener('click', function () {

    pic.style.background = 'url(pepsi003.png)center/cover no-repeat';
    document.body.style.background = 'black';
    pic.style.transition = 'all 2s linear'
})