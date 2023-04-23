const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const sidebarElem = document.getElementById('sidebar');
const bodyElem = document.getElementById('body');

const openSidebar = () => {
    sidebarElem.classList.remove('hidden');
    bodyElem.classList.add('backdrop-brightness-75');
    bodyElem.classList.add('overflow-hidden');
}

const closeSidebar = () => {
    sidebarElem.classList.add('hidden');
    bodyElem.classList.remove('backdrop-brightness-75');
    bodyElem.classList.remove('overflow-hidden');

}

openBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);