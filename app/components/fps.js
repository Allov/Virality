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