const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

// navBtn.addEventListener('click', () => {
//     if (nav.classList.toggle('open')) {
//         navBtnImg.src = "./assets/img/icons/NAVCLOSE.svg";
//     } else {
//         navBtnImg.src = "./assets/img/icons/NAV.svg";
//     }
// })

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./assets/img/icons/NAVCLOSE";
    } else {
        navBtnImg.src = "./assets/img/icons/NAV";
    }
}

console.log(nav);
console.log(navBtn);
console.log(navBtnImg);





// alert(1)