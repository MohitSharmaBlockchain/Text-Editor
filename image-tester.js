// The checker
const inner_div = document.getElementById('inner-div')
const inner_div_bound = sidebar_open.getBoundingClientRect().height + 27
const menu_bound = menu_btn.getBoundingClientRect().height + 27

const gambitGalleryIsInView = el => {
	const scroll = window.scrollY || window.pageYOffset
	const boundsTop = el.getBoundingClientRect().top + scroll
	
	const viewport = {
		top: scroll,
		bottom: scroll + inner_div_bound + 50,
		bottom2: scroll +  menu_bound + 50
	}
    const bounds = {
		top: boundsTop,
		bottom: boundsTop + el.clientHeight,
	}
	console.log(( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom2 ) )

	if(menu_btn.classList.contains('low-zindex')){
		return ( bounds.top <= viewport.bottom && bounds.bottom >= viewport.top );
	} else {
		return ( bounds.top <= viewport.bottom2 && bounds.bottom >= viewport.top );
	}
}


// Usage.
document.addEventListener( 'DOMContentLoaded', () => {
	const tester = document.querySelectorAll( '.tester' )
	
	const handler = () => raf( () => {
		var open = true;

		for(i=0;i<tester.length;i++){
        if(gambitGalleryIsInView( tester[i] )){
			inner_div.style.display = "none"
			break;
        } 
		else {
            inner_div.style.display = "block"
        }
	}
	} )
	
	handler()
	window.addEventListener( 'scroll', handler )
} )

// requestAnimationFrame
const raf = 
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function( callback ) {
        window.setTimeout( callback, 1000 / 60 )
    }