// Création de la grille

// Class grille
class Grid {
    
    // Initialisation de la grille
    constructor() {
        this.rows = 8
        this.columns = 8
        this.players = new Array()
        this.accessibleCell = new Array()
        this.createGrid(container)
    }
    
    // Création de la grille
    createGrid(container) {
        
        // Génération des lignes et des colonnes
        for(let i = 1; i <= this.rows; i++){
            let row = $('<div class="row"></div>').attr('id', 'row-' + i)
            for(let j = 1; j <= this.columns; j++){
                let cell = $('<div class="cell empty"></div>').attr('id', j + '-' + i).appendTo(row)
            }
            row.appendTo(container)
        }
        
    }
    
    // On teste la position du joueur 1 avec le joueur 2
    checkPlayers2Pos(p1, p2) {
        if((p2.pos.x === p1.pos.x) || (p2.pos.x === (p1.pos.x - 1)) || (p2.pos.x === (p1.pos.x + 1)) || (p2.pos.y === p1.pos.y) || (p2.pos.y === (p1.pos.y - 1)) || (p2.pos.y === (p1.pos.y + 1))){
            // Si oui, on établit une nouvelle position pour le joueur 2 et on reteste
            p2.randomCoordinates(8)
            this.checkPlayers2Pos(p1, p2)
        }
    }
    
    // Insertion des joueurs et des armes dans la grille
    placeElements(p1, p2) {
        
        let tabPlayers = [p1, p2]
        for(let i = 0; i < tabPlayers.length; i++){
            this.players.push(tabPlayers[i])
        }
        
        // Parcours des joueurs et armes à insérer
        for(let i = 0; i < tabPlayers.length; i++){
            this.checkPlayers2Pos(p1, p2)
            // Si c'est ok, on place l'élément
            tabPlayers[i].placeElts()
        }

        this.currentPlayer = this.players[0]
        
    }
    
    // Détermination des cases accessibles pour un joueur
    placeAccessibleCells(player) {
        
        for(let i = 0; i < 4; i++){
            
            let posPlayer = player.eltPos.split('-')
            let cellsDirection = new Array()
            
            for(let j = 1; j <= 3; j++){
                
                switch(parseInt([i])){
                    // UP
                    case 0 : 
                    cellsDirection[0] = document.getElementById(posPlayer[0] + "-" + (parseInt(posPlayer[1]) - j))
                    // On stocke les positions up
                    player.moving.up.push(cellsDirection[0])
                    this.checkAccessibleCellsAreOk(cellsDirection, i)
                    break
                    // DOWN
                    case 1 : 
                    cellsDirection[1] = document.getElementById(posPlayer[0] + "-" + (parseInt(posPlayer[1]) + j))
                    // On stocke les positions down
                    player.moving.down.push(cellsDirection[1])
                    this.checkAccessibleCellsAreOk(cellsDirection, i)
                    break
                    // RIGHT
                    case 2 :
                    cellsDirection[2] = document.getElementById((parseInt(posPlayer[0]) + j) + "-" + posPlayer[1])
                    // On stocke les positions right
                    player.moving.right.push(cellsDirection[2])
                    this.checkAccessibleCellsAreOk(cellsDirection, i)
                    break
                    // LEFT
                    case 3 : 
                    cellsDirection[3] = document.getElementById((parseInt(posPlayer[0]) - j) + "-" + posPlayer[1])
                    // On stocke les positions left
                    player.moving.left.push(cellsDirection[3])
                    this.checkAccessibleCellsAreOk(cellsDirection, i)
                    break
                }
                
            }
            
        }
        
    }
    
    checkAccessibleCellsAreOk(cellsDirection, i){
        if(cellsDirection[i] !== null){
            if((cellsDirection[i].className !== 'cell empty donald-trump') && (cellsDirection[i].className !== 'cell empty extraterrestrial')){
                cellsDirection[i].classList.add('accessible')
                this.accessibleCell.push(cellsDirection[i])
            } 
        }
    }

    // Ajout des cellules accessibles (class + event)
    addAccessibleCells(){
        this.placeAccessibleCells(this.currentPlayer)
        this.accessibleCell.forEach(cell => cell.addEventListener('click', this.movementManagement.bind(this)))
    }

    // Gestion des déplacements, de 1 à 3 cases
    movementManagement(e) {

        // Je récupère la position du joueur au click
        let pos = e.target.id.split('-')
        this.currentPlayer.pos.x = parseInt(pos[0]), this.currentPlayer.pos.y = parseInt(pos[1]) 

        // Savoir dans quelle direction le joueur se déplace
        //let posWithoutSeparator = this.currentPlayer.eltPos.split("-")

        // Je déclare une nouvelle position
        //let playerNewPosId = document.getElementById(this.currentPlayer.eltPos[0] + '-' + this.currentPlayer.eltPos[1])
        this.currentPlayer.playerPosId.classList.remove(this.currentPlayer.classPlayer)
        this.currentPlayer.playerPosId = document.getElementById(this.currentPlayer.eltPos[0] + '-' + this.currentPlayer.eltPos[1])

        // Changement de position
        //this.currentPlayer.playerPosId = playerNewPosId
        this.currentPlayer.playerPosId.classList.add(this.currentPlayer.classPlayer)

        // Actualisation x et y
        this.currentPlayer.pos.x = parseInt(this.currentPlayer.eltPos[0])
        this.currentPlayer.pos.y = parseInt(this.currentPlayer.eltPos[1])

        this.deleteAccessibleCells(this.currentPlayer, this.movementManagement)
        
    }
    
    // Suppresion des cellules
    deleteAccessibleCells(player, movementManagement) {
        
        this.accessibleCell.forEach(cell => cell.removeEventListener('click', movementManagement, true))
        // Suppression de la class accessible et de l'évènement
        this.accessibleCell.forEach(cell => cell.classList.remove('accessible'))
        
        // Suppression des cellules accessibles dans le tab
        this.accessibleCell.splice(0, this.accessibleCell.length)
        // Suppresion des positions de déplacement dans les tabs
        for(let prop in player.moving){
            player.moving[prop].splice(0, player.moving[prop].length)
        }

        this.setNextPlayer()
        
    }

    // Définition du prochain joueur
    setNextPlayer(){
        if(this.currentPlayer.name === 'Extraterrestrial'){
            this.currentPlayer = this.players[0]
        }
        else{
            this.currentPlayer = this.players[1]
        }

        this.addAccessibleCells()
    }
    
}