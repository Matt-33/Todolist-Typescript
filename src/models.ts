export enum EtatTache {
    AFAIRE = "A faire",
    ENCOURS = "En cours",
    TERMINE = "Terminé",
}

export class Tache {
  constructor(
    public titre: string,
    public description: string,
    public etat: EtatTache
  ) {}
}

export class GestionnaireTaches {
  private taches: Tache[] = [];

  ajouterTache(tache: Tache): void {
    this.taches.push(tache);
  }

  supprimerTache(index: number): void {
    if (index >= 0 && index < this.taches.length) {
      this.taches.splice(index, 1);
    } else {
      console.log("Index invalide.");
    }
  }

  changerEtat(index: number, nouvelEtat: EtatTache): void {
    if (index >= 0 && index < this.taches.length) {
      this.taches[index].etat = nouvelEtat;
    } else {
      console.log("Index invalide.");
    }
  }

  afficherTaches(): void {
    this.taches.forEach((tache, index) => {
      console.log(`${index}: [${tache.etat}] ${tache.titre} - ${tache.description}`);
    });
  }
}