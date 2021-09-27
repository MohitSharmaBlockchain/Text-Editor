var sidebar = document.getElementById('sidebar');
var sidebar_open = document.getElementById('sidebar-open');
var menu_btn = document.getElementById('menu-btn');
var back_btn = document.getElementById('back-btn');
var side_link = document.getElementById('side-link');
var h1tags = document.getElementsByTagName('h1');
var sidebar_img = document.getElementById('sidebar-img');
var text_area = document.getElementById('text-area')

var arr = [];

var text_area_height = text_area.getBoundingClientRect().height;
document.getElementById('inner-div').style.height = text_area_height+'px';

// strlen($highlight['title']) > 38 ? substr($highlight['title'], 0, 38)."..." : $highlight['title']

for (i = 0; i < h1tags.length; i++) {
    h1tags[i].setAttribute('id',i)
    var span_sidelink ;
    var tooltp = h1tags[i].textContent.length > 25 && span_sidelink
    var string = `<div class="position-relative flex"><a class="tooltip-up" href=#${i}>${h1tags[i].textContent.length > 25 ? h1tags[i].textContent.substr(0,25) + '...' : h1tags[i].textContent}</a>` + `<span class="${h1tags[i].textContent.length > 25 && 'tooltip'}">${h1tags[i].textContent.length > 25 ? h1tags[i].textContent : ''}</span>` + `</div>`
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

var tooltip = document.querySelectorAll('.tooltip');

document.addEventListener('mousemove', fn, false);

function fn(e) {
    for (var i=tooltip.length; i--;) {
        tooltip[i].style.left = e.pageX - 100 + 'px';
        tooltip[i].style.top = '45px';
    }
}