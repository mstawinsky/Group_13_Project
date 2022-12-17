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
    var result = document.querySelector('#result').value;
    output.value = vol;
    

    var value = document.getElementById('fader').value;

    switch (value) {
        case value<100:
            result = value*600;
            break;

        case value>100 && value<150:
            result = value*580;
            break;
        
        case value>150 && value<250:
            result = value*550;
            break;
        
        case value>250:
            result = value*530;
            break;    
    }

    result.value = result;
    output.style.left = vol - 30 + 'px';
}