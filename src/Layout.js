var Layout = function() {
    this.current = String();
};

Layout.prototype.initialize = function(object) {
    if (object.hasOwnProperty('current')) this.setCurrent(object.current);
};

Layout.prototype.copy = function() {
    return Object.assign(new Layout(), this);
};

Layout.prototype.setCurrent = function(current) {
    this.current = current;
};

Layout.prototype.background = function(object) {
    push();
    colorMode(object.mode);
    background(object.background);
    pop();
};

Layout.prototype.text = function(object) {
    push();
    strokeWeight(object.weight);
    stroke(object.stroke);
    fill(object.fill);
    textAlign(object.horizontal, object.vertical);
    textLeading(object.leading);
    textSize(object.size);
    textStyle(object.style);
    textFont(FONTS[object.font]);
    text(object.text, object.x, object.y);
    pop();
};

Layout.prototype.button = function(object) {
    var clicked = false;
    var hovered = collidePointRect(
        mouseX, mouseY,
        object.lx, object.ly,
        object.w, object.h
    );
    push();
    if (hovered && mouseIsPressed) {
        stroke(object.clickstroke);
        fill(object.clickfill);
        clicked = true;

    } else if (hovered) {
        stroke(object.hoverstroke);
        fill(object.hoverfill);
    } else {
        stroke(object.stroke);
        fill(object.fill);
    }
    strokeWeight(object.weight);
    textAlign(object.horizontal, object.vertical);
    textLeading(object.leading);
    textSize(object.size);
    textStyle(object.style);
    textFont(FONTS[object.font]);
    text(object.text, object.x, object.y);
    noFill();
    rectMode(object.mode);
    rect(object.x, object.y, object.w, object.h);
    pop();
    if (clicked) STATES[object.change]();
};

Layout.prototype.run = function() {
    var object = LAYOUTS[this.current];
    var keys = Object.keys(object);
    for (var i = 0; i < keys.length; i++) {
        var item = object[keys[i]];
        this[item.type](item);
    }
};
