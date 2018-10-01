/* Appel au chargement de la page */
document.addEventListener("DOMContentLoaded", application, false);

function application() {
    
    /*** Création des joueurs ***/
    
    // Donald Trump
    const DonaldTrump = new Player('Donald Trump', 'donald-trump')
    // Extraterrestre
    const Extraterrestrial = new Player('Extraterrestrial', 'extraterrestrial')
    

    /*** Création de la grille ***/

    // Initialisation et création de la grille
    const GridMA = new Grid(container)
    // Placement des joueurs dans la grille
    GridMA.placeElements(DonaldTrump, Extraterrestrial)
    
    
    /*** Création du combat ***/
    
    // Initialisation du combat
    const FightGameMA = new FightGame(GridMA)

    /******************* ¨Première méthode *******************/
    // Tour par tour - Déplacement des joueurs sur les cases accessibles
    FightGameMA.addAccessibleCells(GridMA)

    /******************* Deuxième méthode *******************/
    // Tour par tour - Déplacement des joueurs sur les cases accessibles
    //FightGameMA.turnByTurn(DonaldTrump, Extraterrestrial)
    
};