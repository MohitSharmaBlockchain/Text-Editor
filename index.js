var sidebar = document.getElementById('sidebar');
var sidebar_open = document.getElementById('sidebar-open');
var menu_btn = document.getElementById('menu-btn');
var back_btn = document.getElementById('back-btn');
var side_link = document.getElementById('side-link');
var h1tags = document.getElementsByTagName('h1');
var sidebar_img = document.getElementById('sidebar-img');
var text_area = document.getElementById('text-area')

var arr = [];

for (i = 0; i < h1tags.length; i++) {
    var string = `<a href=#${i}>${h1tags[i].textContent}</a>`
    h1tags[i].setAttribute('id', i)
    arr.push(string);
    side_link.innerHTML = side_link.innerHTML + arr[i];
}

sidebar_open.classList.add('disable')

menu_btn.addEventListener('click', () => {
    menu_btn.classList.add('low-zindex')
    menu_btn.classList.remove('high-zindex')
    menu_btn.classList.remove('high-opacity')
    menu_btn.classList.add('low-opacity')
    sidebar.classList.add('low-zindex')
    sidebar.classList.remove('high-zindex')
    sidebar.classList.remove('high-opacity')
    sidebar.classList.add('low-opacity')
    sidebar_open.classList.add('high-zindex')
    sidebar_open.classList.remove('low-zindex')
    sidebar_open.classList.remove('low-opacity')
    sidebar_open.classList.add('high-opacity')
    sidebar_open.classList.remove('disable')
    sidebar_open.style.display = 'flex'
    text_area.style.margin = '0 300px 0 120px'

})

sidebar_img.addEventListener('click', () => {
    sidebar.classList.add('low-zindex')
    sidebar.classList.remove('high-zindex')
    sidebar.classList.remove('high-opacity')
    sidebar.classList.add('low-opacity')
    menu_btn.classList.add('low-zindex')
    menu_btn.classList.remove('high-zindex')
    menu_btn.classList.remove('high-opacity')
    menu_btn.classList.add('low-opacity')
    sidebar_open.classList.add('high-zindex')
    sidebar_open.classList.remove('low-zindex')
    sidebar_open.classList.remove('low-opacity')
    sidebar_open.classList.add('high-opacity')
    sidebar_open.classList.remove('disable')
    sidebar_open.style.display = 'flex'
    text_area.style.margin = '0 300px 0 120px'

})

back_btn.addEventListener('click', () => {
    sidebar.classList.add('high-zindex')
    sidebar.classList.remove('low-zindex')
    sidebar.classList.remove('low-opacity')
    sidebar.classList.add('high-opacity')
    menu_btn.classList.remove('low-zindex')
    sidebar_open.classList.remove('high-zindex')
    menu_btn.classList.add('high-zindex')
    sidebar_open.classList.add('low-zindex')
    menu_btn.classList.remove('low-opacity')
    sidebar_open.classList.remove('high-opacity')
    menu_btn.classList.add('high-opacity')
    sidebar_open.classList.add('low-opacity')
    sidebar_open.classList.add('disable')
    text_area.style.margin = '0 300px 0 120px'

})

var body = document.body;
//Update DOM on scroll 
document.addEventListener("scroll", function () {
    var scrollAmt = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollAmt >= 64) {
        sidebar.style.display = "none";
        menu_btn.style.display = "block";
    }
    else {
        sidebar.style.display = "flex";
        menu_btn.style.display = "none";
    }
});