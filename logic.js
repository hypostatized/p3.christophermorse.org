
        // get width and height of browser window
        var height = $(document).height();
        var width = $(document).width();

        // function to draw piano
        function piano() {

            // create paper canvas for Raphael library
            var paper = Raphael(0, 0, width, height);

            // get coordinates for each arc
            function getCoords(center, radius, angle) {
                var radians = (angle / 180) * Math.PI;
                var x = center[0] + Math.cos(radians) * radius;
                var y = center[1] + Math.sin(radians) * radius;
                return [x, y];
            }

            // draw arc using points from data
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

            // data for piano
            var notes = [{
                "layer": "1",
                "radius": 100,
                "xvalue": 165,
                "yvalue": 195,
                "color": "#FDFD62",
                "key": "65",
                "note": "C3",
                "opacity": 1
            }, {
                "layer": "1",
                "radius": 100,
                "xvalue": 195,
                "yvalue": 225,
                "color": "#CFE958",
                "key": "83",
                "note": "Db3",
                "opacity": 1
            }, {
                "layer": "1",
                "radius": 100,
                "xvalue": 225,
                "yvalue": 255,
                "color": "#64B049",
                "key": "68",
                "note": "D3",
                "opacity": 1
            }, {
                "layer": "1",
                "radius": 100,
                "xvalue": 255,
                "yvalue": 285,
                "color": "#0793C9",
                "key": "70",
                "note": "Eb3",
                "opacity": 1
            }, {
                "layer": "1",
                "radius": 100,
                "xvalue": 285,
                "yvalue": 315,
                "color": "#154BF4",
                "key": "71",
                "note": "E3",
                "opacity": 1
            }, {
                "layer": "1",
                "radius": 100,
                "xvalue": 315,
                "yvalue": 345,
                "color": "#3F099D",
                "key": "72",
                "note": "F3",
                "opacity": 1
            }, {
                "layer": "1",
                "radius": 100,
                "xvalue": 345,
                "yvalue": 375,
                "color": "#8707A8",
                "key": "74",
                "note": "Gb3",
                "opacity": 1
            }, {
                "layer": "1",
                "radius": 100,
                "xvalue": 15,
                "yvalue": 45,
                "color": "#A7174A",
                "key": "75",
                "note": "G3",
                "opacity": 1
            }, {
                "layer": "1",
                "radius": 100,
                "xvalue": 45,
                "yvalue": 75,
                "color": "#FE2224",
                "key": "76",
                "note": "Ab3",
                "opacity": 1
            }, {
                "layer": "1",
                "radius": 100,
                "xvalue": 75,
                "yvalue": 105,
                "color": "#FD5126",
                "key": "186",
                "note": "A3",
                "opacity": 1
            }, {
                "layer": "1",
                "radius": 100,
                "xvalue": 105,
                "yvalue": 135,
                "color": "#FB9836",
                "key": "222",
                "note": "Bb3",
                "opacity": 1
            }, {
                "layer": "1",
                "radius": 100,
                "xvalue": 135,
                "yvalue": 165,
                "color": "#FABB41",
                "key": "13",
                "note": "B3",
                "opacity": 1
            }, {
                "layer": "2",
                "radius": 200,
                "xvalue": 165,
                "yvalue": 195,
                "color": "#FDFD62",
                "key": "81",
                "note": "C4",
                "opacity": 0.6
            }, {
                "layer": "2",
                "radius": 200,
                "xvalue": 195,
                "yvalue": 225,
                "color": "#CFE958",
                "key": "87",
                "note": "Db4",
                "opacity": 0.6
            }, {
                "layer": "2",
                "radius": 200,
                "xvalue": 225,
                "yvalue": 255,
                "color": "#64B049",
                "key": "69",
                "note": "D4",
                "opacity": 0.6
            }, {
                "layer": "2",
                "radius": 200,
                "xvalue": 255,
                "yvalue": 285,
                "color": "#0793C9",
                "key": "82",
                "note": "Eb4",
                "opacity": 0.6
            }, {
                "layer": "2",
                "radius": 200,
                "xvalue": 285,
                "yvalue": 315,
                "color": "#154BF4",
                "key": "84",
                "note": "E4",
                "opacity": 0.6
            }, {
                "layer": "2",
                "radius": 200,
                "xvalue": 315,
                "yvalue": 345,
                "color": "#3F099D",
                "key": "89",
                "note": "F4",
                "opacity": 0.6
            }, {
                "layer": "2",
                "radius": 200,
                "xvalue": 345,
                "yvalue": 375,
                "color": "#8707A8",
                "key": "85",
                "note": "Gb4",
                "opacity": 0.6
            }, {
                "layer": "2",
                "radius": 200,
                "xvalue": 15,
                "yvalue": 45,
                "color": "#A7174A",
                "key": "73",
                "note": "G4",
                "opacity": 0.6
            }, {
                "layer": "2",
                "radius": 200,
                "xvalue": 45,
                "yvalue": 75,
                "color": "#FE2224",
                "key": "79",
                "note": "Ab4",
                "opacity": 0.6
            }, {
                "layer": "2",
                "radius": 200,
                "xvalue": 75,
                "yvalue": 105,
                "color": "#FD5126",
                "key": "80",
                "note": "A4",
                "opacity": 0.6
            }, {
                "layer": "2",
                "radius": 200,
                "xvalue": 105,
                "yvalue": 135,
                "color": "#FB9836",
                "key": "219",
                "note": "Bb4",
                "opacity": 0.6
            }, {
                "layer": "2",
                "radius": 200,
                "xvalue": 135,
                "yvalue": 165,
                "color": "#FABB41",
                "key": "221",
                "note": "B4",
                "opacity": 0.6
            }, {
                "layer": "3",
                "radius": 300,
                "xvalue": 165,
                "yvalue": 195,
                "color": "#FDFD62",
                "key": "49",
                "note": "C5",
                "opacity": 0.3
            }, {
                "layer": "3",
                "radius": 300,
                "xvalue": 195,
                "yvalue": 225,
                "color": "#CFE958",
                "key": "50",
                "note": "Db5",
                "opacity": 0.3
            }, {
                "layer": "3",
                "radius": 300,
                "xvalue": 225,
                "yvalue": 255,
                "color": "#64B049",
                "key": "51",
                "note": "D5",
                "opacity": 0.3
            }, {
                "layer": "3",
                "radius": 300,
                "xvalue": 255,
                "yvalue": 285,
                "color": "#0793C9",
                "key": "52",
                "note": "Eb5",
                "opacity": 0.3
            }, {
                "layer": "3",
                "radius": 300,
                "xvalue": 285,
                "yvalue": 315,
                "color": "#154BF4",
                "key": "53",
                "note": "E5",
                "opacity": 0.3
            }, {
                "layer": "3",
                "radius": 300,
                "xvalue": 315,
                "yvalue": 345,
                "color": "#3F099D",
                "key": "54",
                "note": "F5",
                "opacity": 0.3
            }, {
                "layer": "3",
                "radius": 300,
                "xvalue": 345,
                "yvalue": 375,
                "color": "#8707A8",
                "key": "55",
                "note": "Gb5",
                "opacity": 0.3
            }, {
                "layer": "3",
                "radius": 300,
                "xvalue": 15,
                "yvalue": 45,
                "color": "#A7174A",
                "key": "56",
                "note": "G5",
                "opacity": 0.3
            }, {
                "layer": "3",
                "radius": 300,
                "xvalue": 45,
                "yvalue": 75,
                "color": "#FE2224",
                "key": "57",
                "note": "Ab5",
                "opacity": 0.3
            }, {
                "layer": "3",
                "radius": 300,
                "xvalue": 75,
                "yvalue": 105,
                "color": "#FD5126",
                "key": "48",
                "note": "A5",
                "opacity": 0.3
            }, {
                "layer": "3",
                "radius": 300,
                "xvalue": 105,
                "yvalue": 135,
                "color": "#FB9836",
                "key": "189",
                "note": "Bb5",
                "opacity": 0.3
            }, {
                "layer": "3",
                "radius": 300,
                "xvalue": 135,
                "yvalue": 165,
                "color": "#FABB41",
                "key": "187",
                "note": "B5",
                "opacity": 0.3
            }];

            
            var note = new Array();
            for (var i = 0; i < notes.length; i++) {
                note[i] = paper.path(arc([width / 2, height / 2], notes[i].radius, notes[i].xvalue, notes[i].yvalue));
                note[i].attr("stroke-width", "75");
                note[i].attr("stroke", notes[i]['color']);
                note[i].attr("opacity", notes[i]['opacity']);
            };

            Raphael.fn.line = function (startX, startY, endX, endY) {
                return this.path('M' + startX + ' ' + startY + ' L' + endX + ' ' + endY);
            };
            var musicLine = [];
            var keyActivated = [];

            function drawMusic(keys) {
                for (var i = 0; i < notes.length; i++) {
                    if (keys == notes[i].key) {
                        getAngle = (notes[i].xvalue + notes[i].yvalue) / 2;
                        goTo = getCoords([width / 2, height / 2], notes[i].radius, getAngle);
                        musicLine[keys] = paper.line(width / 2, height / 2, goTo).attr({
                            "stroke": notes[i].color,
                            "stroke-width": (notes[i].radius / 10),
                            "opacity": notes[i].opacity
                        });
                        var clickSound = new Audio('piano/' + notes[i].note + '.mp3');
                        clickSound.play();
                    }
                }
            }

            function removeMusic(keys) {
                musicLine[keys].remove();
            }
            $(document).keydown(function (event) {
                var keys = (event.keyCode ? event.keyCode : event.which);
                if (keyActivated[event.which] == true) return;
                keyActivated[event.which] = true;
                drawMusic(keys);
            });
            $(document).keyup(function (event) {
                var keys = (event.keyCode ? event.keyCode : event.which);
                removeMusic(keys);
                keyActivated[event.which] = false;
            });
        };
        var piano = piano();
