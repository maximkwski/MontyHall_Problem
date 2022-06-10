class Doors {
    constructor(_prize) {
        this.prize = _prize;
    }
}

class Game {
    constructor() {
        this.doors = [];
        this.won;
        this.doorPicked = Math.floor((Math.random() * 3));
    }
    createDoors() {
        this.doors.push(new Doors("Goat"));
        this.doors.push(new Doors("Goat"));
        this.doors.push(new Doors("Car"));

        // this.doors = [Goat, Goat, Car]             
    }
    finalChoice(changed) {
        if (changed) {
            if (this.doors[this.doorPicked].prize === "Goat") {
                this.won = true;
            } else { this.won = false };
        } else {
            if (this.doors[this.doorPicked].prize === "Goat") {
                this.won = false;
            } else { this.won = true };
        }
    }

    //Add any method needed
}

class Statistics {
    constructor() {
        this.gamesWithSameDoorWon = [];
        this.gamesWithSameDoorLost = [];
        this.gamesWithDoorChangeWon = [];
        this.gamesWithDoorChangeLost = [];
    }
    playStats() {
        for (let i = 0; i < 500; i++) {
            let game = new Game();
            game.createDoors();
            game.finalChoice(false);
            if (game.won) {
                this.gamesWithSameDoorWon.push(game);
            } else {
                this.gamesWithSameDoorLost.push(game);
            }
        }
        for (let i = 0; i < 500; i++) {
            let game = new Game();
            game.createDoors();
            game.finalChoice(true);
            if (game.won) {
                this.gamesWithDoorChangeWon.push(game);
            } else {
                this.gamesWithDoorChangeLost.push(game);
            }


        }
    }

}
let gameStatistics = new Statistics();
gameStatistics.playStats();
console.log("Number of games won when door is changed ", (Math.round((gameStatistics.gamesWithDoorChangeWon.length / 500) * 100)) + " %");
console.log("Number of games won when door is not changed ", (Math.round((gameStatistics.gamesWithSameDoorWon.length / 500) * 100)) + " %");