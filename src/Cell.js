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
