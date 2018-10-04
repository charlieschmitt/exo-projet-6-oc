// Création du combat

// Class combat
class FightGame {
    
    // Initialisation du combat
    constructor(grid) {
        this.currentPlayer = grid.players[0]
        this.grid = grid
    }
    
    // Définition du prochain joueur
    setNextPlayer(){
        if(this.currentPlayer.name === 'Extraterrestrial'){
            this.currentPlayer = this.grid.players[0]
        }
        else{
            this.currentPlayer = this.grid.players[1]
        }
    }
    
    // Ajout des cellules accessibles (class + event)
    addAccessibleCells(){
        this.grid.placeAccessibleCells(this.currentPlayer)
        this.grid.accessibleCell.forEach(cell => cell.addEventListener('click', this.turnBasedGame.bind(this)))
    }
    
    // Jeu tour par tour
    turnBasedGame(e){
        // Lancement de la méthode de déplacement
        this.currentPlayer.movementManagement(this.currentPlayer, e)
        this.grid.deleteAccessibleCells(this.currentPlayer, this.turnBasedGame)
        this.setNextPlayer()
        // On renvoie la méthode de tour par tour
        this.addAccessibleCells()
    }

}