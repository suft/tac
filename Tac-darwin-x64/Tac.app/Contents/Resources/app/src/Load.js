var FONTS;
var IMAGES;
var SCENES;
var LAYOUTS;
var STATES;

function preload() {
    FONTS = {
        'LemonMilk': loadFont('./assets/fonts/LemonMilk.otf'),
        'CornerStone': loadFont('./assets/fonts/CornerStone.ttf'),
        'KiloGram': loadFont('./assets/fonts/KiloGram.otf'),
        'BlackSword': loadFont('./assets/fonts/BlackSword.otf'),
        'AzedoBold': loadFont('./assets/fonts/AzedoBold.otf'),
        'AzedoLight': loadFont('./assets/fonts/AzedoLight.otf')
    };
    SCENES = {
        'Splash': loadJSON('./assets/layouts/Splash.json')
    };
    LAYOUTS = {
        'Main': loadJSON('./assets/layouts/Main.json')
    };
    IMAGES = {};
    createCanvas(windowWidth, windowHeight);
}
