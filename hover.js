/*
    kutsutud, kui kursor siseneb raamatu kaanele
    teeb tausta tumedaks, näitab raamatu kirjeldust ja näitab 'lisa korvi' nuppu
*/ 
function enter(el) {
    el.children[0].style.filter = "brightness(0.4)";
    el.children[1].style.visibility = "visible";
    el.children[3].style.visibility = "visible";
}

/*
    kutsutud, kuid kursor väljub raamatu kaanelt
    teeb tausta heledaks, peidab raamatu kirjeldust ja 'lisa korvi' nuppu
*/
function leave(el) {
    el.children[0].style.filter = "brightness(1.0)";
    el.children[1].style.visibility = "hidden";
    el.children[3].style.visibility = "hidden";
}