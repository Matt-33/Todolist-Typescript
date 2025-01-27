import { EtatTache, Tache, GestionnaireTaches } from "./models";

const todolist = new GestionnaireTaches();

const task1 = new Tache("Faire les courses", "Acheter du pain et du lait", EtatTache.AFAIRE);
const task2 = new Tache("Étudier TypeScript", "Revoir les bases des types et classes", EtatTache.AFAIRE);

todolist.ajouterTache(task1);
todolist.ajouterTache(task2);

console.log("Liste initiale :");
todolist.afficherTaches();

todolist.changerEtat(0, EtatTache.ENCOURS);
console.log("\nAprès changement d'état :");
todolist.afficherTaches();

todolist.supprimerTache(1);
console.log("\nAprès suppression :");
todolist.afficherTaches();
