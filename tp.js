class Voiture {
    constructor() {
        this.kmParcourus = 0;
        this.niveauEssence = 50;
        this.vitesse = 0;
    }
    rouler(km) {
        console.log("La voiture roule pendant " + km + " km.");
        this.kmParcourus += km;
    }
    faireLePlein() {
        console.log("La voiture fait le plein d'essence.");
        this.niveauEssence = 100;
    }
    accelerer(vitesse) {
        console.log("La voiture accélère à " + vitesse + " km/h.");
        this.vitesse = vitesse;
    }
}

class Conduire {
    constructor(voiture) {
        this.voiture = voiture;
    }
    rouler(km) {
        this.voiture.rouler(km);
        this.voiture.niveauEssence -= km / 10;
    }
    faireLePlein() {
        this.voiture.faireLePlein();
    }
    accelerer(vitesse) {
        this.voiture.accelerer(vitesse);
    }
}

class VoitureFacade {
    constructor() {
        this.voiture = new Voiture();
        this.conduire = new Conduire(this.voiture);
    }
    rouler(km) {
        this.conduire.rouler(km);
    }
    faireLePlein() {
        this.conduire.faireLePlein();
    }
    accelerer(vitesse) {
        this.conduire.accelerer(vitesse);
    }
}

// Utilisation de la facade pour créer et manipuler une voiture
const maVoiture = new VoitureFacade();
maVoiture.faireLePlein();
maVoiture.accelerer(50);
maVoiture.rouler(100);
