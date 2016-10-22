var Game = function() {
    this.initialized = false;
    this.board = [];
    this.player = '';
    this.winner = '';
    this.turns = 0;
};

Game.prototype.initialize = function(object) {
    this.board = [];
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            this.board.push(new Cell({
                x: 250 + (150 * x),
                y: 150 + (150 * y),
                width: 150,
                height: 150,
                value: ''
            }));
        }
    }
    this.player = random(['X', 'O']);
    this.winner = '';
    this.turns = 0;
};

Game.prototype.copy = function() {
    return Object.assign(new Game(), this);
};

Game.prototype.render = function() {
    background("BLACK");
    switch (this.winner) {
        case '':
            for (var i = 0; i < this.board.length; i++) {
                this.board[i].render();
                var collision = collidePointRect(
                    mouseX, mouseY,
                    this.board[i].x - this.board[i].width/2,
                    this.board[i].y - this.board[i].height/2,
                    this.board[i].width,
                    this.board[i].height
                );
                if (this.board[i].value === '' && collision && mouseIsPressed) {
                    this.board[i].value = this.player;
                    this.change();
                }
            }
            this.outcome();
            break;
        case 'X':
            stroke("CYAN");
            strokeWeight(75);
            line(
                400 - (225 * 2/3),
                300 - (225 * 2/3),
                400 + (225 * 2/3),
                300 + (225 * 2/3)
            );
            line(
                 400 - (225 * 2/3),
                 300 + (225 * 2/3),
                 400 + (225 * 2/3),
                 300 - (225 * 2/3)
            );
            break;
        case 'O':
            stroke("PURPLE");
            strokeWeight(75);
            ellipse(400, 300, 300);
            break;
        case 'T':
        stroke("CYAN");
        strokeWeight(75);
        line(
            400 - (225 * 2/3),
            300 - (225 * 2/3),
            400 + (225 * 2/3),
            300 - (225 * 2/3)
        );
        line(
             400,
             300 + (225 * 2/3),
             400,
             300 - (225 * 2/3)
        );
            break;
        default:
            break;
    }

};

Game.prototype.run = function() {
    if (!this.initialized) {
        this.initialize();
        this.initialized = true;
    }
    this.render();
}

function keyPressed() {
    if (keyCode === ENTER && this.winner != '') {
        Game.initialize();
    }
}

Game.prototype.change = function() {
    if (this.player === 'X') this.player = 'O';
    else if (this.player === 'O') this.player = 'X';
    this.turns++;
}

Game.prototype.outcome = function() {
    if (this.board[0].value === this.board[1].value &&
        this.board[0].value === this.board[2].value &&
        this.board[0].value !== '') {
            this.winner = this.board[0].value;
    } else if (this.board[3].value === this.board[4].value &&
        this.board[3].value === this.board[5].value &&
        this.board[3].value !== '') {
            this.winner = this.board[3].value;
    } else if (this.board[6].value === this.board[7].value &&
        this.board[6].value === this.board[8].value &&
        this.board[6].value !== '') {
            this.winner = this.board[6].value;
    } else if (this.board[0].value === this.board[3].value &&
        this.board[0].value === this.board[6].value &&
        this.board[0].value !== '') {
            this.winner = this.board[0].value;
    } else if (this.board[1].value === this.board[4].value &&
        this.board[1].value === this.board[7].value &&
        this.board[1].value !== '') {
            this.winner = this.board[1].value;
    } else if (this.board[2].value === this.board[5].value &&
        this.board[2].value === this.board[8].value &&
        this.board[2].value !== '') {
            this.winner = this.board[2].value;
    } else if (this.board[0].value === this.board[4].value &&
        this.board[0].value === this.board[8].value &&
        this.board[0].value !== '') {
            this.winner = this.board[0].value;
    } else if (this.board[2].value === this.board[4].value &&
        this.board[2].value === this.board[6].value &&
        this.board[2].value !== '') {
            this.winner = this.board[2].value;
    } else if (this.turns === 9) {
        this.winner = 'T';
    }
}

var Cell = function(attributes) {
    this.x = attributes.x || 0;
    this.y = attributes.y || 0;
    this.width = attributes.width || 0;
    this.height = attributes.height || 0;
    this.value = attributes.value || '';
};

Cell.prototype.render = function() {
    rectMode(CENTER);
    noFill();
    stroke("WHITE");
    strokeWeight(10);
    strokeCap(PROJECT);
    rect(this.x, this.y, this.width, this.height);
    switch (this.value) {
        case 'X':
            stroke("CYAN");
            strokeWeight(15);
            line(
                this.x - (this.width/2 * 2/3),
                this.y - (this.height/2 * 2/3),
                this.x + (this.width/2 * 2/3),
                this.y + (this.height/2 * 2/3)
             );
             line(
                 this.x - (this.width/2 * 2/3),
                 this.y + (this.height/2 * 2/3),
                 this.x + (this.width/2 * 2/3),
                 this.y - (this.height/2 * 2/3)
              );
            break;
        case 'O':
            stroke("PURPLE");
            strokeWeight(15);
            ellipse(this.x, this.y, this.width * 2/3);
            break;
        default:
            break;
    }
};
