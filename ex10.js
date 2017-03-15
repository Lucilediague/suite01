"use strict";
/*
    Ecrire une fonction "shoppingList",
    qui prend un paramètre un tableau de paniers;

    Un panier est un tableau de mots;

    La fonction retourne un objet contenant:
        - comme clef le nom du produit rencontré
        - comme valeur le nombre de fois qu'il à été rencontré

    Important -> l'ordre n'a aucune importance
*/

/*      Test 1
    Appel à la fonction "shoppingList",
    prenant en paramètre le tableau

    [
        ["orange", "orange", "kiwi", "ananas"],
        ["kiwi", "ananas", "banane", "prune"],
        ["orange", "orange", "orange", "orange"],
        ["orange", "orange", "kiwi", "kiwi"],
        ["prune", "banane", "pamplemousse", "ananas"]
    ]

    et nous attendons comme résultat

    {
        "orange": 8,
        "kiwi": 4,
        "ananas": 3,
        "prune": 2,
        "banane": 2,
        "pamplemousse": 1
    }

*/

shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]);

//  écrire votre code sous ce commentaire

/* function shoppingList(lists) {

    let total = {"orange": 0, "kiwi": 0, "ananas": 0, "prune": 0, "banane": 0, "pamplemousse": 0};

    for (let i = 0; i < lists.length; i++) {
        total = cart(lists[i],total);

    }
    return total;
};

function cart(list, total) {

    for (i = 0; i < list.length; i++) {
        
        if (list[i] == "orange") {
            total.orange++;
        }
        else if (list[i] == "kiwi") {
           total.kiwi++;
        }
        else if (list[i] == "ananas") {
            total.ananas++;
        }
        else if (list[i] == "prune") {
            total.prune++;
        }
        else if (list[i] == "banane") {
            total.banane++;
        }
        else if (list[i] == "pamplemousse") {
            total.pamplemousse++;
        }
    }
    return total;
} */

function shoppingList(list) {
    var fruitsList = {};
    for (let i = 0; i < list.length; i++) {
        for (let a = 0; a < list[i].length; a++) {
            if (fruitsList.hasOwnProperty(list[i][a])) {
                fruitsList[list[i][a]]++;
            }
            else {
                fruitsList[list[i][a]] = 1;
            }
        }
    }
    console.log(fruitsList);
    return fruitsList;
}

