board = [];
player = '';

function setup() {
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            board.push(new Cell({
                x: 250 + (150 * x),
                y: 150 + (150 * y),
                width: 150,
                height: 150,
                value: ''
            }));
        }
    }
    player = random(['X', 'O']);
}

function change() {
    if (player === 'X') player = 'O';
    else if (player === 'O') player = 'X';
}

function draw() {
    background("BLACK");
    for (var i = 0; i < board.length; i++) {
        board[i].render();
        var collision = collidePointRect(
            mouseX, mouseY,
            board[i].x - board[i].width/2,
            board[i].y - board[i].height/2,
            board[i].width,
            board[i].height
        );
        if (board[i].value === '' && collision && mouseIsPressed) {
            board[i].value = player;
            change();
        }
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
