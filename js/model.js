const dropDown = document.querySelector('.dropdown');
const select = dropDown.querySelector('.select');
const menu = dropDown.querySelector('.menu');
const caretIcon = dropDown.querySelector('#caret-icon');
const menuOptions = dropDown.querySelectorAll('.menu li');
const selected = dropDown.querySelector('.selected');

const toggleMenu = document.querySelector('.toggle');
const navLinks = document.querySelector('.nav-link');
let isNavOpen = false;

const toggleNav = () => {
    isNavOpen = !isNavOpen;
    toggleHandler();
};

let link=navLinks.querySelectorAll('a');


toggleMenu.addEventListener('click', toggleNav);

const toggleHandler = () => {
    const toggleIcon = document.querySelector('.toggle i');
    if (isNavOpen) {
        toggleIcon.classList.replace('bx-menu', 'bx-x');
        navLinks.classList.add('active');
    } else {
        toggleIcon.classList.replace('bx-x', 'bx-menu');
        navLinks.classList.remove('active');
    }
};

const body = document.querySelector('body');
const checkScreen = () => {
    const width = window.innerWidth;
    if (width <= 893) {
        isNavOpen = false;
        toggleHandler();
    }
};

window.addEventListener('resize', checkScreen);

const toggleSelect = () => {
    menu.classList.toggle('menu-open');
    caretIcon.classList.toggle('caret-rotate');
    select.classList.toggle('select-clicked');
};

const selectOption = (e) => {
    const option = e.target.innerText;
    selected.innerHTML = option;
    toggleSelect();
};

select.addEventListener('click', toggleSelect);
menuOptions.forEach(option => {
    option.addEventListener('click', selectOption);
});

const loadAnimation = (container, path) => {
    return lottie.loadAnimation({
        container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path
    });
};

const anim = loadAnimation(document.getElementById('lottie-container'), './json/animation_llewvetw.json');

const sections = document.querySelectorAll(".card");
const started = Array(sections.length).fill(false);

const startCount = (el, goal, measurement) => {
    let start = 0;
    const duration = 1000;
    const interval = 10;
    const step = (goal * interval) / duration;

    const count = setInterval(() => {
        start += step;
        el.textContent = `${Math.round(start)}${measurement}`;
        if (start >= goal) {
            el.textContent = `${goal}${measurement}`;
            clearInterval(count);
        }
    }, interval);
};

const getMeasurement = (section) => {
    const text = section.querySelector("p").textContent;
    if (text.includes("%")) {
        return "%";
    } else if (text.includes("K")) {
        return "K";
    } else {
        return "+";
    }
};

window.addEventListener("scroll", () => {
    sections.forEach((section, index) => {
        if (window.scrollY >= section.offsetTop - 400 && !started[index]) {
            const num = section.querySelector(".nums .num");
            if (num) {
                const goal = parseFloat(num.dataset.goal);
                const measurement = getMeasurement(section);
                startCount(num, goal, measurement);
                started[index] = true;
            }
        }
    });
});
link.forEach((item)=>{
    item.addEventListener('click',()=>{
        isNavOpen = false;
        toggleHandler();
    })
}
)