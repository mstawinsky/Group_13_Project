window.onscroll = function() {
    var scrollCurrent = window.pageYOffset;
    const header = document.querySelector('header')
    if (scrollCurrent>=100) {
        header.classList.add('scrolled')
    }
    
    else {
        header.classList.remove('scrolled')
    }
}

function rangeFunc(vol) {
    var output = document.querySelector('#fader');
    output.value = vol;
    output.style.left = vol - 20 + 'px';
}