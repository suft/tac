var Scene = function() {
    this.current = String();
    this.duration = 0;
};

Scene.prototype.initialize = function(object) {
    if (object.hasOwnProperty('current')) this.setCurrent(object.current);
    if (object.hasOwnProperty('duration')) this.setDuration(object.duration);

};

Scene.prototype.copy = function() {
    return Object.assign(new Scene(), this);
};

Scene.prototype.setCurrent = function(current) {
    this.current = current;
};

Scene.prototype.setDuration = function(duration) {
    this.duration = duration;
};

Scene.prototype.state = function(object) {
    if (this.duration === 0) STATES[object.change]();
    else this.duration--;
};

Scene.prototype.background = function(object) {
    push();
    colorMode(object.mode);
    background(object.background);
    pop();
};

Scene.prototype.text = function(object) {
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

Scene.prototype.run = function() {
    var scene = SCENES[this.current];
    var keys = Object.keys(scene);
    for (var i = 0; i < keys.length; i++) {
        var item = scene[keys[i]];
        this[item.type](item);
    }
};
