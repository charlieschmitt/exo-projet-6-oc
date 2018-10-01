// Création du combat

// Class combat
class FightGame {
    
    /******************* ¨Première méthode *******************/
    
    // Initialisation du combat
    constructor(grid) {
        this.currentPlayer = grid.players[0]
        this.p1 = grid.players[0]
        this.p2 = grid.players[1]
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
        this.currentPlayer.movementManagement(e)
        this.grid.deleteAccessibleCells(this.currentPlayer, this.game)
        this.setNextPlayer()
        // On renvoie la méthode de tour par tour
        this.addAccessibleCells()
    }
    
    /******************* Deuxième méthode *******************/
    /*
    constructor(grid) {
        this.currentPlayer = grid.players[0]
        this.p1 = grid.players[0]
        this.p2 = grid.players[1]
        this.grid = grid
    }
    
    // Tour par tour
    turnByTurn(p1, p2){
        
        if(this.currentPlayer.name === "Donald Trump"){
            this.grid.placeAccessibleCells(p1);
            // Parcours de toutes les cases accessibles
            this.grid.accessibleCell.forEach(cell => cell.addEventListener('click', this.game1.bind(this)))
        }
        
        else if(this.currentPlayer.name === "Extraterrestrial"){
            this.grid.placeAccessibleCells(p2);
            // Parcours de toutes les cases accessibles
            this.grid.accessibleCell.forEach(cell => cell.addEventListener('click', this.game2.bind(this)))
        }
        
    }
    
    // Jeu tour par tour p1
    game1(e){
        this.grid.deleteAccessibleCells(this.p1, this.game1);
        this.p1.movementManagement(e);
        this.currentPlayer = this.p2;
        // On renvoie la méthode de tour par tour
        this.turnByTurn(this.p1, this.p2);
    }
    
    // Jeu tour par tour p2
    game2(e){
        this.grid.deleteAccessibleCells(this.p2, this.test2);
        this.p2.movementManagement(e);
        this.currentPlayer = this.p1;
        // On renvoie la méthode de tour par tour
        this.turnByTurn(this.p1, this.p2);
    }
    */
}