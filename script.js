const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}


let arrow = document.getElementById('arrow');
let header = document.getElementById('header');
let isMoved = false;

arrow.addEventListener('click', () => {
    console.log("Clicked")
    if (!isMoved) {
        header.style.marginTop = '0px';
        arrow.src = "../iMAGES/up.svg";
        isMoved = true;
    } else {
        header.style.marginTop = '-60px';
        arrow.src = "../iMAGES/down.svg";
        isMoved = false;
    }
});
