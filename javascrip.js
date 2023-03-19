const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const buyBtns = $$('.place-by-btn');
const ticketModal = $('.tiket-modal');
const closeItem = $('.ti-close');
const modalContainer = $('.modal-container');
const textContent = $$('.text-content');
const mobieMenuBtn = $('.mobie-menu-bnt');
const header = $('#header');
const navItems = $$('#header a');
const subNavItems = $$('.subnav a');
console.log(subNavItems);


console.log(navItems);

var myIndex = 0;
textContent[2].style.display = "flex";
setInterval(() => {
    for(let i=0;i<textContent.length;i++) {
                textContent[i].style.display = "none";
            }
            myIndex++;
            if(myIndex>textContent.length) {
                myIndex = 1;
            }
                textContent[myIndex-1].style.display = "flex";
}, 4000);

for(let i=0; i<buyBtns.length; i++) {
    buyBtns[i].onclick = function() {
        ticketModal.classList.add('open');
    }
}

closeItem.onclick = function() {
    ticketModal.classList.remove('open');
}

ticketModal.onclick = function() {
    ticketModal.classList.remove('open');
}

modalContainer.onclick = function(event) {
    event.stopPropagation();
}
subNavItems.onclick = function(event) {
    event.stopPropagation();
}
const currentHeaderHeight = header.clientHeight;

mobieMenuBtn.onclick = function() {
    let isClose = header.clientHeight === currentHeaderHeight;
    if(isClose) {
    header.style.height = "auto";
    } else {
        header.style.height = null;
    }
}

for(let i=0; i<navItems.length; i++) {
     navItems[i].onclick = function(event) {
        let isParentMenu = this.classList.contains('parent-menu');
        console.log(isParentMenu);
        if(!isParentMenu) {
        header.style.height = null;
        } else {
            event.preventDefault();
        }
     }
}




