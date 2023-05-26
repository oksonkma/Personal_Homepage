const clockElement = document.getElementById('clock');
let time = new Date().toLocaleTimeString();
clockElement.innerText = time;

function updateClock() {
    let time = new Date().toLocaleTimeString();
    clockElement.innerText = time;
}
setInterval(updateClock, 1000);

const searchElem= document.getElementById('search') ;
const searchFieldElem= document.getElementById('search-field') ;
const searchString= "https://duckduckgo.com/?q="
document.addEventListener("keydown",event=>{
    if (event.key==" "){
        
        searchElem.style.display='flex';
        searchFieldElem.focus();
    }else if (event.key =="Escape"){
        searchFieldElem.value ='';
        searchFieldElem.blur();
        searchElem.style.display='none';

    }

    document.addEventListener("keydown",event=>{
        if(event.key=="Enter"){
            let query= searchFieldElem.value;
            window.open(searchString + query, "self");
        }

    });

});