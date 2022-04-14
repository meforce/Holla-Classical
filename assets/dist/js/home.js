// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
scrollFunction();
};

function scrollFunction() {
scrollUpVisebleFunction();
scrollHeaderVisebleFunction();
scrollHeader2VisebleFunction();
}

function scrollUpVisebleFunction() {
//Get the button:
mybuttonUp = document.getElementById("ups");

if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
mybuttonUp.style.display = "block";
} else {
mybuttonUp.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function scrollHeaderVisebleFunction() {
//Get
fixedheaders = document.getElementById("fixedheaders");
if(fixedheaders){
if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
fixedheaders.style.position = "fixed";
} else {
fixedheaders.style.position = "relative";
}
}
}

function scrollHeader2VisebleFunction() {
//Get
fixedheaders2 = document.getElementById("fixedheaders2");
container3 = document.getElementById("container3");
if(fixedheaders2){
if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
fixedheaders2.style.position = "fixed";
container3.style.display = "flex";
} else {
fixedheaders2.style.position = "relative";
container3.style.display = "block";
}
}
}