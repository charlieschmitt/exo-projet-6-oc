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

    // Gestion des déplacements, de 1 à 3 cases
    movementManagement(e) {

        // Je récupère la position du joueur au click
        this.eltPos = e.currentTarget.id

        // Savoir dans quelle direction le joueur se déplace
        let posWithoutSeparator = this.eltPos.split("-")

        // Je déclare une nouvelle position
        let playerNewPosId = document.getElementById(posWithoutSeparator[0] + '-' + posWithoutSeparator[1])
        this.playerPosId.classList.remove(this.classPlayer)

        // Changement de position
        this.playerPosId = playerNewPosId
        this.playerPosId.classList.add(this.classPlayer)

        // Actualisation x et y
        this.pos.x = parseInt(posWithoutSeparator[0])
        this.pos.y = parseInt(posWithoutSeparator[1])
        
    }
    
}