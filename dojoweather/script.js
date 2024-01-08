
var cookie = document.querySelector('.cookies');

function hide() {
    cookies.remove();
}


function convert(element) {
    for( var i=1; i<9; i++) {
        var temp = document.querySelector("#temp" +i);
        console.log(temp);
    }
    
    console.log(element.value);

}

//watched the video for assistance with the converting temperature function 