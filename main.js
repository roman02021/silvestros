const mountain = document.querySelector('.mountain');
const trees = document.querySelector('.trees');
const fullHora = document.querySelector('.full-hora');
let a = 3;
let b = 3;
window.addEventListener('scroll', (e) => {
    // const rect = mountain.getBoundingClientRect();
    // console.log(window.scrollY);
    // console.log(rect.top);
    // a += 3;
    // b -= 3;
    mountain.style.transform = `translateY(${-window.scrollY / 5}px)`;
    trees.style.transform = `translateY(${-window.scrollY / 3.5}px)`;
    // trees.style.top = `${a}px`;
});
