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
        this.moving = {up : new Array(), down : new Array(), right : new Array(), left : new Array()}
    }
    
    // Coordonnées aléatoires
    randomCoordinates(max) {
        this.pos.x = Math.floor((Math.random() * max) + 1), this.pos.y = Math.floor((Math.random() * max) + 1)
    }
    
    // Placement des joueurs dans la grille
    placeElts() {
        // Position x et y de chaque joueur
        this.playerPosId = document.getElementById((this.pos.x) + '-' + (this.pos.y))
        // Paramètre class
        this.playerPosId.classList.add(this.classPlayer)
    }

    // Gestion des déplacements, de 1 à 3 cases
    movementManagement(currentPlayer, e) {
        // Je récupère la position du joueur au click
        let pos = e.target.id.split('-')
        // Suppression de la class du joueur
        currentPlayer.playerPosId.classList.remove(currentPlayer.classPlayer)
        // Actualisation position x et y du joueur
        currentPlayer.pos.x = parseInt(pos[0]), currentPlayer.pos.y = parseInt(pos[1]) 
        // Actualisation position id x et y du joueur
        currentPlayer.playerPosId = document.getElementById(currentPlayer.pos.x + '-' + currentPlayer.pos.y)
        // Ajout de la class à la nouvelle position
        currentPlayer.playerPosId.classList.add(currentPlayer.classPlayer)
    }
    
}