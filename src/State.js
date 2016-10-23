var State = function() {
    this.current = String();
    this.scene = new Scene();
    this.layout = new Layout();
    this.game = new Game();
};

State.prototype.initialize = function(object) {
    if (object.hasOwnProperty('current')) this.setCurrent(object.current);
    if (object.hasOwnProperty('scene')) this.setScene(object.scene);
    if (object.hasOwnProperty('layout')) this.setLayout(object.layout);
    if (object.hasOwnProperty('game')) this.setGame(object.game);
};

State.prototype.copy = function() {
    return Object.assign(new State(), this);
};

State.prototype.getCurrent = function() {
    return this.current;
};

State.prototype.setCurrent = function(current) {
    this.current = current;
};

State.prototype.setScene = function(scene) {
    this.scene = scene.copy();
};

State.prototype.setLayout = function(layout) {
    this.layout = layout.copy();
};

State.prototype.setGame = function(game) {
    this.game = game.copy();
};

State.prototype.run = function() {
    switch (this.current) {
        case 'Splash':
            this.scene.run();
            break;
        case 'Main':
            this.layout.run();
            break;
        case 'Game':
            this.game.run();
            break;
        case 'Quit':
            window.close();
            break;
        default:
            break;
    }
};
