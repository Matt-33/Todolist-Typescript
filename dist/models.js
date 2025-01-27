"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestionnaireTaches = exports.Tache = exports.EtatTache = void 0;
var EtatTache;
(function (EtatTache) {
    EtatTache["AFAIRE"] = "A faire";
    EtatTache["ENCOURS"] = "En cours";
    EtatTache["TERMINE"] = "Termin\u00E9";
})(EtatTache || (exports.EtatTache = EtatTache = {}));
class Tache {
    constructor(titre, description, etat) {
        this.titre = titre;
        this.description = description;
        this.etat = etat;
    }
}
exports.Tache = Tache;
class GestionnaireTaches {
    constructor() {
        this.taches = [];
    }
    ajouterTache(tache) {
        this.taches.push(tache);
    }
    supprimerTache(index) {
        if (index >= 0 && index < this.taches.length) {
            this.taches.splice(index, 1);
        }
        else {
            console.log("Index invalide.");
        }
    }
    changerEtat(index, nouvelEtat) {
        if (index >= 0 && index < this.taches.length) {
            this.taches[index].etat = nouvelEtat;
        }
        else {
            console.log("Index invalide.");
        }
    }
    afficherTaches() {
        this.taches.forEach((tache, index) => {
            console.log(`${index}: [${tache.etat}] ${tache.titre} - ${tache.description}`);
        });
    }
}
exports.GestionnaireTaches = GestionnaireTaches;
