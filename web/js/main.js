// rightArrow
var arrowDiv = document.getElementsByClassName('rightArrow')[0];

document.getElementsByClassName('rightArrowBtn')[0].onclick = function() {
    console.log(arrowDiv);

    if(this.innerHTML === 'Play') 
    { 
        this.innerHTML = 'Pause';
        arrowDiv.classList.add('horizTranslate');
    } 
    else {
        this.innerHTML = 'Play';
        var computedStyle = window.getComputedStyle(arrowDiv),
            marginLeft = computedStyle.getPropertyValue('margin-left');
        arrowDiv.style.marginLeft = marginLeft;
        arrowDiv.classList.remove('horizTranslate');
    }  
}
// end rightArrow