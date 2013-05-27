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
    
Features
--------

###Assets###
Virality comes with an asset loader. Nothing fancy there. It prevents loading the same resource twice. It supports audio and images at the moment.

    // Loading an image and keeping the reference.
    var myimage = v.load("myimage.png");
    
    // Loading a sound and accessing it later.
    v.load({ name: "mysound", media: "mysound.ogg" });
    var mysound = v.assets["mysound"];
    mysound.play();

###Components###
Components may be created and inserted in Virality's loop. It currently support `name`, `init`, `update` and `render`.

    v.components({
      name: "My Component",
      init: function() {
        // will be called once inside v.components()
      },
      update: function(elapsed) {
        // called every frame with time elapsed since the last call.
      },
      render: function(context, elapsed) {
        // called every frame with time elapsed since the last call. It comes with the buffer 2d context.
      }
    });

    

    
