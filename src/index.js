import{about} from "./about.js"
import { home } from "./home.js";
import { menu } from "./menu.js";
import style from "./style.css"


const initialize=()=>{

    const loadAbout= document.getElementById("contactBtn")
    const loadhome= document.getElementById("homeBtn")
    const loadmenu= document.getElementById("menuBtn")

    loadhome.addEventListener('click', home);
    loadmenu.addEventListener('click', menu);
    loadAbout.addEventListener('click', about);


  home()
}

initialize()