// $("#but").click(
//     function () {
//         console.log("Hello World !");
//     }
// );


// ready attend que la page soit correctement chargée
// $(document).ready(function () {
//     $("#but").click(function () {
//         console.log("Hello World!");
//     });
// });

// idem ready en raccourcis
// ("#but", "body") précise la zone de recherche,
// cherche but dans body. "body" est optionnel
$(function () {
    $("#but", "body").click(function () {
        // $("#container").text("<p>Hello</p>");
        // $("#container").html("<p>Hello</p>");
        $("div#container").prepend("<h1>hello</h1>")
        $("div#container").append("<h1>bye</h1>")
    });
})

$(function () {
    $("#but", "body").click(function () {
        $("div p:nth-child(1)").prepend("<p>test</p>")
    });
});

// Utilisation de la méthode .attr("nom de l'attribut")
// qui permet de récupérer la valeur de l'attribut passé
// en paramètre
// Affiche "blue"
$(function () {
    console.log($("p").attr("class"));
});


// Utilisation de la méthode .attr("nom de l'attribut")
// et .each() qui permet de récupérer toutes les valeurs
//  de l'attribut passé
// en paramètre
// Affiche "blue" "red" "blue"
$(function () {
    $("p").each(function () {
        console.log($(this).attr("class"));
    });
});

// Utilisation de la méthode .length qui permet de 
// déterminer le nombre d'éléments sélectionnés
// Affiche 3
$(function () {
    console.log($("p").length);
});

// Utilisation de la méthode .eq(i)
// qui permet de choisir l'élément 
// ayant l'indice passé en paramètre
// Affiche "blue"
$(function () {
    //console.log($("p").eq(0));
    console.log($("p:eq(0)"));
});


// Opérations :
// p:lt(i) : parag < indice i
// p:gt(i) : parag > indice i
// p:even : parag d'indice pair
// p:odd : parag d'indice impair
// p:first : premier parag
// p:last : dernier parag
// input:text : On récupère les inputs et type text


// Utilisation de la méthode .removeAttr("nom attribut")
// supprimant l'attribut passé en paramètre
// puis de la méthode .attr("nom attribut", "nouvelle valeur")
// qui va permettre de modifier la valeur de l'attribut
// passé en paramètre
$(function () {
    $("p").eq(0).removeAttr("class");
    $("p").eq(0).attr("class", "red");
    // OU
    // $("p").even().removeClass("blue").addClass("red");
});


// Utilisation de la méthode val() qui permet de récupérer
// la valeur de l'attribut value
$(function () {
    $("#but").click(function () {
        console.log($("#nom").val());
    });
});


// Utilisation de la méthode val(nouvelleValeur) qui permet de récupérer
// la valeur de l'attribut value par la valeur passée 
// en paramètre
$(function () {
    $("#but").click(function () {
        console.log($("#nom").val("John Wick"));
    });
});

// $("#nom").val("John Wick");


// Utiilisation de la méthode .css(nomPropriete) qui nous permet
// de récupérer la valeur de la prpriété css passée en paramètre
$(function () {
    console.log($("p").eq(0).css("color"));
});


// Utiilisation de la méthode .css(nomPropriete, nouvelle valeur)
// qui nous permet de modifier la valeur
// puis de la méthode .css(nomPropriete, nouvelle valeur)
// qui va permettre de modifier la valeur de la propriété
// passée en paramètre
$(function () {
    console.log($("p").eq(0).css("color", "green"));
    console.log($("p").eq(0).css({ "color": "green", "background-color": "red" }));
});


// Méthodes .xClass()
// .addClass() : Ajoute une classe
// .removeClass() : Supprime une classe
// .hasClass() : Teste l'existence d'une classe
// .toggleClass() : Retire ou ajoute une classe


// En utilisant les methodes xClass, ecrire un code jQuery qui permet de
// permuter les couleurs des paragraphes suivants : (rouge -> bleu), (bleu ->
// vert) et (vert -> rouge).


$(function () {
    $("#red").each(function () {
        $(this).removeClass("red").addClass("blue");
    });
});
$(function () {
    $("#blue").each(function () {
        $(this).removeClass("blue").addClass("green");
    });
});
$(function () {
    $("#green").each(function () {
        $(this).removeClass("green").addClass("red");
    });
});

//

// Utilisation de la méthode wrap(baliseHTML)
// permettant d'entourer les éléments sélectionnés
// ici les balises p par les balises passées en paramètres
// ici <div>
//        <p>Bonjour</p>
//        <p>Bonsoir</p>
//     </div>

$(function () {
    $("#but2").click(function () {
        $("p").wrap("<div></div>");
    }​​);
}​​);


