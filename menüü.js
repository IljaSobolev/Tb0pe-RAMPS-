/*  
    Autor: Jaanis Soosaar
    Allikas: https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp */
 
 /* Menüü avamise funktsioon */   
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    
 /* Menüü sulgemisefunktsioon */   
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }
