Virality
========

A small, component based, graphic engine. It uses `requestAnimationFrame` to get a 60 FPS loop. The engine also depends on `requireJs`. I built it mainly to make a game I'm wokring on.

Getting started
---------------

###The structure (Optional)###

- __app__
  - components
      - myfirstcomponent.js (optional)
  - __virality.js__
  - main.js
- __assets__
  - sprites.png (optional)

###The view###

    <html>
    <head>
        <title>My awesome game</title>
        <script src="app/libs/require.js" data-main="app/main"></script>
        <script>
            requirejs.config({
                "baseUrl": "app"
            });
        </script>
    </head>
    <body>
    </body>
    </html>
    
###The main.js###

    define(["virality"], function(v) {
      v.init(640, 480)
       .background("#000")
       .start();
    });
    
###Creating a component###

    define(["virality"], function(v) {
        var options = {
            x: 30,
            y: 30
        };
        var fps = {
            config: function(settings) {
                for(var i in settings) {
                    options[i] = settings[i];
                }
            },
            name: "fpsCounter",
            render: function(context, elapsed) {
                context.font = "30px Trebuchet MS";
                context.fillStyle = 'white';
                context.fillText(v.fps() + " FPS", options.x, options.y);
            }
        };
        
        return fps;
    });

###Adding the component to Virality###

    define(["virality", "components/fps"], function(v) {
      v.components(fps);
    });
