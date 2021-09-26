// The checker
const inner_div = document.getElementById('inner-div')
const inner_div_bound = sidebar_open.getBoundingClientRect().height + 27

const gambitGalleryIsInView = el => {
	const scroll = window.scrollY || window.pageYOffset
	const boundsTop = el.getBoundingClientRect().top + scroll
	
	const viewport = {
		top: scroll,
		bottom: scroll + inner_div_bound,
	}
    const bounds = {
		top: boundsTop,
		bottom: boundsTop + el.clientHeight,
	}

    return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
		|| ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
}


// Usage.
document.addEventListener( 'DOMContentLoaded', () => {
	const tester = document.querySelector( '.tester' )
	
	const handler = () => raf( () => {
		var open = true;
        if(gambitGalleryIsInView( tester )){
			inner_div.style.display = "none"
        } 
		else {
            inner_div.style.display = "block"
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