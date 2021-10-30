class Controller {
    constructor() {
        this.view = new View();
        this.model = new Model();
        this.view.playEvent.addListener((i) => { this.model.play(i) });
        this.model.updateCellEvent.addListener((data) => {this.view.changeCellColor(data.move, data.row, data.player)});


        this.model.victoryEvent.addListener((winner) => {this.view.declareWinner(winner)});


        this.model.drawEvent.addListener(() => {this.view.declareDraw()});
    }

    startGame(){
        this.view.createBoard();
    }

}       


