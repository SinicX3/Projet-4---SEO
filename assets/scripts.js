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

function () {
    const target = document.GetElementById("#contact");
    const div = assignObject(createElement("div"), {className: "quote"});
    const div_title = assignObject(createElement("div"));
    const div_ul = assignObject(createElement("div"));

    div.innerText("Bonjour");
  
    target.insertAdjacentElement("afterend", div);
    
}

	<div class="quote">
		<div>
			<h2>Mes coordonnées</h2>
		</div>
		<div>
			<ul itemscope itemtype="https://schema.org/LocalBusiness">
				<li><span itemprop="name">Nina Carducci</span></li>
				<li>Adresse : <span itemprop="address">68 avenue Alsace-Lorraine, 33200 Bordeaux</span>.</li>
				<li>Téléphone : <span itemprop="telephone">05 56 67 78 89</span>.</li>
				<li>Je réponds au téléphone <span itemprop="openingHours" datetime="Monday through Friday, 10:00-19:00">du lundi au vendredi de 10 h à 19 h</span>.</li>
			</ul>
		</div>
	</div>
