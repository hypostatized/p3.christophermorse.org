// check if this browser is Firefox, and if so
// play OGG files in the piano instead of MP3
// because most verions of Firefox do not support
// mp3 in the audio tag
var firefox = !(window.mozInnerScreenX == null);
if (firefox) {
    var musicfile = ".ogg"
    var ff = true;
} else {
    var musicfile = ".mp3"
}

// get width and height of browser window
var height = $(document).height();
var width = $(document).width();

// function to draw piano


function piano() {

    // create paper canvas for Raphael library
    var paper = Raphael(0, 0, width, height);

    // draw title text
    paper.text(100, 50, "COLOR\tPIANO\t\nby\tChristopher\tMorse").attr({
        "font-family": "Candara, Calibri, Segoe, Optima, Arial, sans-serif",
        "font-size": "18"
    });

    // draw about link
    paper.text(100, 100, "About").attr({
        "font-family": "Candara, Calibri, Segoe, Optima, Arial, sans-serif",
        "font-size": "16",
        "fill": "red",
        "href": "/about.html"
    });

    // draw directions link
    paper.text(100, 125, "Directions").attr({
        "font-family": "Candara, Calibri, Segoe, Optima, Arial, sans-serif",
        "font-size": "16",
        "fill": "red",
        "href": "/directions.html"
    });

    // get coordinates for each arc


    function getCoords(center, radius, angle) {
        var radians = (angle / 180) * Math.PI;
        var x = center[0] + Math.cos(radians) * radius;
        var y = center[1] + Math.sin(radians) * radius;
        return [x, y];
    }

    // create function that draws arc
    // based on coordinates and the
    // points from the data set below


    function arc(center, radius, startAngle, endAngle) {
        angle = startAngle;
        coords = getCoords(center, radius, angle);
        path = "M " + coords[0] + " " + coords[1];
        while (angle <= endAngle) {
            coords = getCoords(center, radius, angle);
            path += " L " + coords[0] + " " + coords[1];
            angle += 1;
        }
        return path;
    }

    // data set
    var notes = [{
        "layer": "1",
        "radius": 100,
        "xvalue": 165,
        "yvalue": 195,
        "color": "#FDFD62",
        "key": "65",
        "key_firefox": "65",
        "note": "C3",
        "opacity": 1
    }, {
        "layer": "1",
        "radius": 100,
        "xvalue": 195,
        "yvalue": 225,
        "color": "#CFE958",
        "key": "83",
        "key_firefox": "83",
        "note": "Db3",
        "opacity": 1
    }, {
        "layer": "1",
        "radius": 100,
        "xvalue": 225,
        "yvalue": 255,
        "color": "#64B049",
        "key": "68",
        "key_firefox": "68",
        "note": "D3",
        "opacity": 1
    }, {
        "layer": "1",
        "radius": 100,
        "xvalue": 255,
        "yvalue": 285,
        "color": "#0793C9",
        "key": "70",
        "key_firefox": "70",
        "note": "Eb3",
        "opacity": 1
    }, {
        "layer": "1",
        "radius": 100,
        "xvalue": 285,
        "yvalue": 315,
        "color": "#154BF4",
        "key": "71",
        "key_firefox": "71",
        "note": "E3",
        "opacity": 1
    }, {
        "layer": "1",
        "radius": 100,
        "xvalue": 315,
        "yvalue": 345,
        "color": "#3F099D",
        "key": "72",
        "key_firefox": "72",
        "note": "F3",
        "opacity": 1
    }, {
        "layer": "1",
        "radius": 100,
        "xvalue": 345,
        "yvalue": 375,
        "color": "#8707A8",
        "key": "74",
        "key_firefox": "74",
        "note": "Gb3",
        "opacity": 1
    }, {
        "layer": "1",
        "radius": 100,
        "xvalue": 15,
        "yvalue": 45,
        "color": "#A7174A",
        "key": "75",
        "key_firefox": "75",
        "note": "G3",
        "opacity": 1
    }, {
        "layer": "1",
        "radius": 100,
        "xvalue": 45,
        "yvalue": 75,
        "color": "#FE2224",
        "key": "76",
        "key_firefox": "76",
        "note": "Ab3",
        "opacity": 1
    }, {
        "layer": "1",
        "radius": 100,
        "xvalue": 75,
        "yvalue": 105,
        "color": "#FD5126",
        "key": "186",
        "key_firefox": "59",
        "note": "A3",
        "opacity": 1
    }, {
        "layer": "1",
        "radius": 100,
        "xvalue": 105,
        "yvalue": 135,
        "color": "#FB9836",
        "key": "222",
        "key_firefox": "16",
        "note": "Bb3",
        "opacity": 1
    }, {
        "layer": "1",
        "radius": 100,
        "xvalue": 135,
        "yvalue": 165,
        "color": "#FABB41",
        "key": "13",
        "key_firefox": "13",
        "note": "B3",
        "opacity": 1
    }, {
        "layer": "2",
        "radius": 200,
        "xvalue": 165,
        "yvalue": 195,
        "color": "#FDFD62",
        "key": "81",
        "key_firefox": "81",
        "note": "C4",
        "opacity": 0.6
    }, {
        "layer": "2",
        "radius": 200,
        "xvalue": 195,
        "yvalue": 225,
        "color": "#CFE958",
        "key": "87",
        "key_firefox": "87",
        "note": "Db4",
        "opacity": 0.6
    }, {
        "layer": "2",
        "radius": 200,
        "xvalue": 225,
        "yvalue": 255,
        "color": "#64B049",
        "key": "69",
        "key_firefox": "69",
        "note": "D4",
        "opacity": 0.6
    }, {
        "layer": "2",
        "radius": 200,
        "xvalue": 255,
        "yvalue": 285,
        "color": "#0793C9",
        "key": "82",
        "key_firefox": "82",
        "note": "Eb4",
        "opacity": 0.6
    }, {
        "layer": "2",
        "radius": 200,
        "xvalue": 285,
        "yvalue": 315,
        "color": "#154BF4",
        "key": "84",
        "key_firefox": "84",
        "note": "E4",
        "opacity": 0.6
    }, {
        "layer": "2",
        "radius": 200,
        "xvalue": 315,
        "yvalue": 345,
        "color": "#3F099D",
        "key": "89",
        "key_firefox": "89",
        "note": "F4",
        "opacity": 0.6
    }, {
        "layer": "2",
        "radius": 200,
        "xvalue": 345,
        "yvalue": 375,
        "color": "#8707A8",
        "key": "85",
        "key_firefox": "85",
        "note": "Gb4",
        "opacity": 0.6
    }, {
        "layer": "2",
        "radius": 200,
        "xvalue": 15,
        "yvalue": 45,
        "color": "#A7174A",
        "key": "73",
        "key_firefox": "73",
        "note": "G4",
        "opacity": 0.6
    }, {
        "layer": "2",
        "radius": 200,
        "xvalue": 45,
        "yvalue": 75,
        "color": "#FE2224",
        "key": "79",
        "key_firefox": "79",
        "note": "Ab4",
        "opacity": 0.6
    }, {
        "layer": "2",
        "radius": 200,
        "xvalue": 75,
        "yvalue": 105,
        "color": "#FD5126",
        "key": "80",
        "key_firefox": "80",
        "note": "A4",
        "opacity": 0.6
    }, {
        "layer": "2",
        "radius": 200,
        "xvalue": 105,
        "yvalue": 135,
        "color": "#FB9836",
        "key": "219",
        "key_firefox": "219",
        "note": "Bb4",
        "opacity": 0.6
    }, {
        "layer": "2",
        "radius": 200,
        "xvalue": 135,
        "yvalue": 165,
        "color": "#FABB41",
        "key": "221",
        "key_firefox": "221",
        "note": "B4",
        "opacity": 0.6
    }, {
        "layer": "3",
        "radius": 300,
        "xvalue": 165,
        "yvalue": 195,
        "color": "#FDFD62",
        "key": "49",
        "key_firefox": "49",
        "note": "C5",
        "opacity": 0.3
    }, {
        "layer": "3",
        "radius": 300,
        "xvalue": 195,
        "yvalue": 225,
        "color": "#CFE958",
        "key": "50",
        "key_firefox": "50",
        "note": "Db5",
        "opacity": 0.3
    }, {
        "layer": "3",
        "radius": 300,
        "xvalue": 225,
        "yvalue": 255,
        "color": "#64B049",
        "key": "51",
        "key_firefox": "51",
        "note": "D5",
        "opacity": 0.3
    }, {
        "layer": "3",
        "radius": 300,
        "xvalue": 255,
        "yvalue": 285,
        "color": "#0793C9",
        "key": "52",
        "key_firefox": "52",
        "note": "Eb5",
        "opacity": 0.3
    }, {
        "layer": "3",
        "radius": 300,
        "xvalue": 285,
        "yvalue": 315,
        "color": "#154BF4",
        "key": "53",
        "key_firefox": "53",
        "note": "E5",
        "opacity": 0.3
    }, {
        "layer": "3",
        "radius": 300,
        "xvalue": 315,
        "yvalue": 345,
        "color": "#3F099D",
        "key": "54",
        "key_firefox": "54",
        "note": "F5",
        "opacity": 0.3
    }, {
        "layer": "3",
        "radius": 300,
        "xvalue": 345,
        "yvalue": 375,
        "color": "#8707A8",
        "key": "55",
        "key_firefox": "55",
        "note": "Gb5",
        "opacity": 0.3
    }, {
        "layer": "3",
        "radius": 300,
        "xvalue": 15,
        "yvalue": 45,
        "color": "#A7174A",
        "key": "56",
        "key_firefox": "56",
        "note": "G5",
        "opacity": 0.3
    }, {
        "layer": "3",
        "radius": 300,
        "xvalue": 45,
        "yvalue": 75,
        "color": "#FE2224",
        "key": "57",
        "key_firefox": "57",
        "note": "Ab5",
        "opacity": 0.3
    }, {
        "layer": "3",
        "radius": 300,
        "xvalue": 75,
        "yvalue": 105,
        "color": "#FD5126",
        "key": "48",
        "key_firefox": "48",
        "note": "A5",
        "opacity": 0.3
    }, {
        "layer": "3",
        "radius": 300,
        "xvalue": 105,
        "yvalue": 135,
        "color": "#FB9836",
        "key": "189",
        "key_firefox": "173",
        "note": "Bb5",
        "opacity": 0.3
    }, {
        "layer": "3",
        "radius": 300,
        "xvalue": 135,
        "yvalue": 165,
        "color": "#FABB41",
        "key": "187",
        "key_firefox": "61",
        "note": "B5",
        "opacity": 0.3
    }];


    // execute function to draw arcs
    var note = new Array();
    for (var i = 0; i < notes.length; i++) {
        note[i] = paper.path(arc([width / 2, height / 2], notes[i].radius, notes[i].xvalue, notes[i].yvalue));
        note[i].attr("stroke-width", "75");
        note[i].attr("stroke", notes[i]['color']);
        note[i].attr("opacity", notes[i]['opacity']);
    };

    // create a Raphael function to draw a line from
    // a starting x,y point to an ending x,y point
    Raphael.fn.line = function (startX, startY, endX, endY) {
        return this.path('M' + startX + ' ' + startY + ' L' + endX + ' ' + endY);
    };

    // variables to record lines drawn and
    // keys activated
    var musicLine = [];
    var keyActivated = [];


    function drawMusic(keys) {
        for (var i = 0; i < notes.length; i++) {
            // check to see if the browser is Firefox,
            // if so use the Firefox keyboard values
            // to match location and note
            if (ff) {
                if (keys == notes[i].key_firefox) {
                    getAngle = (notes[i].xvalue + notes[i].yvalue) / 2;
                    goTo = getCoords([width / 2, height / 2], notes[i].radius, getAngle);
                    // execute line drawing function and use
                    // values established in data set to design line
                    musicLine[keys] = paper.line(width / 2, height / 2, goTo).attr({
                        "stroke": notes[i].color,
                        "stroke-width": (notes[i].radius / 10),
                        "opacity": notes[i].opacity
                    });
                    // play audio
                    var clickSound = new Audio('piano/' + notes[i].note + musicfile);
                    clickSound.play();
                }
            }
            // if not Firefox use regular key values
            else if (keys == notes[i].key) {
                getAngle = (notes[i].xvalue + notes[i].yvalue) / 2;
                goTo = getCoords([width / 2, height / 2], notes[i].radius, getAngle);
                // execute line drawing function and use
                // values established in data set to design line
                musicLine[keys] = paper.line(width / 2, height / 2, goTo).attr({
                    "stroke": notes[i].color,
                    "stroke-width": (notes[i].radius / 10),
                    "opacity": notes[i].opacity
                });
                // play audio
                var clickSound = new Audio('piano/' + notes[i].note + musicfile);
                clickSound.play();
            }
        }
    }

    // delete lines connecting pitch to
    // center of instrument


    function removeMusic(keys) {
        musicLine[keys].remove();
    }

    // keydown function to check which key
    // is down and then execute drawMusic function
    $(document).keydown(function (event) {
        var keys = (event.keyCode ? event.keyCode : event.which);
        if (keyActivated[event.which] == true) return;
        keyActivated[event.which] = true;
        drawMusic(keys);
    });

    // keyup function to check for key release
    // and to erase the lines connecting pitch to
    // the center
    $(document).keyup(function (event) {
        var keys = (event.keyCode ? event.keyCode : event.which);
        removeMusic(keys);
        keyActivated[event.which] = false;
    });
};

// run piano
var piano = piano();