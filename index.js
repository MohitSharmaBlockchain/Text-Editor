var sidebar = document.getElementById('sidebar');
var sidebar_closed = document.getElementById('sidebar-closed');
var sidebar_open = document.getElementById('sidebar-open');
var menu_btn = document.getElementById('menu-btn');
var back_btn = document.getElementById('back-btn');
var side_link = document.getElementById('side-link');
var h1tags = document.getElementsByTagName('h1');

var arr = [];

for(i=0; i<h1tags.length; i++){
    var string = `<a href=#${h1tags[i].id}>${h1tags[i].textContent}</a>`
    arr.push(string);
    side_link.innerHTML = side_link.innerHTML + arr[i] ;
}

// sidebar_closed.classList.add('disable')

menu_btn.addEventListener('click', () => {
    menu_btn.classList.add('low-zindex')
    sidebar_closed.classList.add('high-zindex')
    menu_btn.classList.remove('high-zindex')
    sidebar_closed.classList.remove('low-zindex')
    menu_btn.classList.remove('high-opacity')
    sidebar_closed.classList.remove('low-opacity')
    menu_btn.classList.add('low-opacity')
    sidebar_closed.classList.add('high-opacity')
    sidebar_closed.classList.remove('disable')
})

back_btn.addEventListener('click', () => {
    menu_btn.classList.remove('low-zindex')
    sidebar_closed.classList.remove('high-zindex')
    menu_btn.classList.add('high-zindex')
    sidebar_closed.classList.add('low-zindex')
    menu_btn.classList.remove('low-opacity')
    sidebar_closed.classList.remove('high-opacity')
    menu_btn.classList.add('high-opacity')
    sidebar_closed.classList.add('low-opacity')
    sidebar_closed.classList.add('disable')
})

var body = document.body; 
//Update DOM on scroll 
document.addEventListener("scroll", function() {  
    var scrollAmt = window.pageYOffset || document.documentElement.scrollTop; 
	if(scrollAmt >= 64) {
	 	sidebar.style.display = "none";  
        menu_btn.style.display = "block";
    }
  	else {
		sidebar.style.display = "flex";
        menu_btn.style.display = "none";
      }
}); 