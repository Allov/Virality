Virality
========

A small, component based, graphic engine. It uses `requestAnimationFrame` to get a 60 FPS loop. The engine also depends on `requireJs`. I built it mainly to make a game I'm wokring on.

Getting started
---------------

###The structure (Optional)###

- __app__
  - components
      - myfirstcomponent.js (optional)
  - libs
      - __require.js__
  - __virality.js__
  - main.js
- __assets__
  - sprites.png (optional)
- index.html

###index.html###

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
    
###app/components/fps.js###

    define(["virality"], function(v) {
        var fps = function() {
            var self = this;
            self.name = "fpsCounter";
            self.render = function(context, elapsed) {
                context.font = "30px Trebuchet MS";
                context.fillStyle = 'white';
                context.fillText(v.fps() + " FPS", 30, 30);
            }
        };
        
        return fps;
    });

###app/main.js###

    define(["virality", "components/fps"], function(v, fps) {
      v.config({ debug: true })
       .init(640, 480)
       .background("#000")
       .start();
      
      v.components(new fps());
    });
