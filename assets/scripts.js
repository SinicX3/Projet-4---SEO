$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

function Coords () {

    const target = document.getElementById("contact");
    const div = Object.assign(document.createElement("div"), {className:"quote"});
    const div_title = Object.assign(document.createElement("div"), {innerHTML:"<h2>Mes coordonnées</h2>"});
    const div_ul = Object.assign(document.createElement("div"));

    div.appendChild(div_title);
  
    const ul = Object.assign(document.createElement("ul"), {itemtype:"https://schema.org/LocalBusiness"});
    ul.setAttribute("itemscope","");
    const li1 = Object.assign(document.createElement("li"), {innerHTML:"<li><span itemprop=`name`>Nina Carducci</span></li>"});
    const li2 = Object.assign(document.createElement("li"), {innerHTML:"<li>Adresse : <span itemprop=`address`>68 avenue Alsace-Lorraine, 33200 Bordeaux</span>.</li>"});
    const li3 = Object.assign(document.createElement("li"), {innerHTML:"<li>Téléphone : <span itemprop=`telephone`>05 56 67 78 89</span>.</li>"});
    const li4 = Object.assign(document.createElement("li"), {innerHTML:"<li>Je réponds au téléphone <span itemprop=`openingHours` datetime=`Monday through Friday, 10:00-19:00`>du lundi au vendredi de 10 h à 19 h</span>.</li>"});

    [li1, li2, li3, li4].forEach((e) => ul.appendChild(e));
    div_ul.appendChild(ul);
    div.appendChild(div_ul);
    target.insertAdjacentElement("afterend", div);
    
}

Coords();
