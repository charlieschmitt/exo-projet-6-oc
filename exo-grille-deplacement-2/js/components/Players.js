// Création des joueurs

// Class Joueur
class Player {
    
    // Initialisation du joueur
    constructor(name, classPlayer) {
        this.name = name
        this.classPlayer = classPlayer
        this.pos = {x : 0, y : 0}
        this.playerPosId = 0
        this.oldPos = {x : 0, y : 0}
        this.randomCoordinates(8)
        this.eltPos = this.pos.x + '-' + this.pos.y
        this.moving = {up : new Array(), down : new Array(), right : new Array(), left : new Array()}
    }
    
    // Coordonnées aléatoires
    randomCoordinates(max) {
        this.pos.x = Math.floor((Math.random() * max) + 1), this.pos.y = Math.floor((Math.random() * max) + 1)
        this.eltPos = this.pos.x + '-' + this.pos.y
    }
    
    // Placement des joueurs dans la grille
    placeElts() {
        // Position x et y de chaque joueur
        this.playerPosId = document.getElementById((this.pos.x) + '-' + (this.pos.y))
        // Paramètre class
        this.playerPosId.classList.add(this.classPlayer)
    }
    
}