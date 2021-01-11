//Exercice 1
// Écrire un programme qui trouve toutes les zones de texte
// puis qui crée une bordure.
// Ajouter ensuite tous les paragraphes à l'objet jQuery
// pour définir leurs bordures en rouge

// $("....").css("border", "...").add("...")
// .css("...", "2px solid red");

$('#button1').click(function () {
    $("textarea").add("p").css("border", "2px solid red");
});



// Exercice 2
// Ajoute la classe "w3r_font_color" au dernier élément de
// paragraphe.
$(function () {
    $("p").last().addClass("w3r_font_color");
});



// Exercice 3


// hide() pour cacher,
// show() pour montrer,
// remove() pour supprimer définitivement,
// empty() pour "vider" le contenu,
// html() pour récupérer le contenu html,
// text() pour récupérer le contenu texte,
// html("du html ici") pour remplacer le contenu html,
// clone() pour cloner le contenu trouvé,
// appendTo("p" ou autre) pour ajouter à un élément du dom,
// wrap("<h1></h1>") pour encadrer par des h1,
// wrapAll("<h1></h1>") pour encadrer tous les objets trouvés
//                      en les regroupant entre des h1,
// css("border","3px solid red") pour changer le style, etc


function enleverLiens() {
    $("#contenu a").remove();
}

function enleverGras() {
    $("#contenu .gras").remove();
}

function enleverItalique() {
    $("#contenu .italique").remove();
}

function enleverDecor() {
    $('#contenu *:not(html):not(body):not(p):not(button)').remove();
}

function viderBoutons() {
    $("#contenu button").empty("button");
}

function voirCode() {
    $('#contenu').text($('p').html());
}

function liensEnBoutons() {
    $("#contenu a").wrap("<button></button>");
}

function dupliquerTexte() {
    $("#contenu").clone().appendTo("#contenu");
}

function regrouperLiens() {
    $("a").wrapAll("<div></div>");
}

function mettreTitres() {
    $("#contenu .titre1").wrap("<h1></h1>");
    $("#contenu .titre2").wrap("<h2></h2>");
}

function regrouperTitres() {
    $("h1").wrapAll("<div></div>");
    $("h2").wrapAll("<div></div>");
}

function colorer() {
    $('#contenu .rouge').wrap('<span style="color:red"></span>');
    $('#contenu .vert').wrap('<span style="color:green"></span>');
    $('#contenu .orange').wrap('<span style="color:orange"></span>');
    $('#contenu .bleu').wrap('<span style="color:blue"></span>');
}

function semantique() {
    $("#contenu .italique").wrap("<i></i>");
    $("#contenu .gras").wrap("<b></b>");
    $("#contenu .souligne").wrap("<u></u>");
    $("#contenu .barre").wrap("<strike></strike>");
}

