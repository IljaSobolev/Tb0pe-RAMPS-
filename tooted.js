function enter(el) {
    el.children[0].style.filter = "brightness(0.4)";
    el.children[1].style.visibility = "visible";
    el.children[3].style.visibility = "visible";
}

function leave(el) {
    el.children[0].style.filter = "brightness(1.0)";
    el.children[1].style.visibility = "hidden";
    el.children[3].style.visibility = "hidden";
}

function kontaktid() {
	window.location.href = "kontakt.html";
}
