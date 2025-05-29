function animation() {
    // Animation du menu
    let menus = document.querySelectorAll(".nav-item");
    menus.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.setAttribute("class", "bg-warning text-secondary");
        });
        item.addEventListener("mouseleave", () => {
            item.removeAttribute("class", "bg-warning text-secondary");
        })
    })

    //Animation pour la partie A propos

    let prop = document.getElementById("img_prop");
    prop.addEventListener('mouseenter', () => {
        prop.setAttribute("class", "bg-secondary text-light m-auto w-75");
    });
    prop.addEventListener("mouseleave", () => {
        prop.removeAttribute("class", "bg-secondary text-light");
    });

    // Animation pour la partie Services
    let serv = document.getElementById("services");
    serv.addEventListener('mouseenter', () => {
        serv.setAttribute("class", "bg-secondary text-light");
    });
    serv.addEventListener("mouseleave", () => {
        serv.removeAttribute("class", "bg-secondary text-light");
    });

    // Animation pour la partie Contact
    let cont = document.getElementById("contact");
    cont.addEventListener('mouseenter', () => {
        cont.setAttribute("class", "bg-secondary text-light");
    });
    cont.addEventListener("mouseleave", () => {
        cont.removeAttribute("class", "bg-secondary text-light");
    });
    // Animation sur les boutons 
    let btns=document.querySelectorAll(".btn");
    btns.forEach(elt=>{
        elt.addEventListener("mouseenter",()=>{
            elt.setAttribute("class","btn btn-light text-dark mb-2");
        });
        elt.addEventListener("mouseleave", () => {
        elt.setAttribute("class", "btn btn-warning text-dark mb-2");
    });

    });
}
animation();
