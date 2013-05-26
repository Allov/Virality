define(["virality"], function(v) {
    v.config({ debug: true });
    require(["components/heartbeat", "components/sprite", "components/starfield", "components/fps"], function(h, sprite, starfield, fps) {
        v.init(640, 480)
         .background("#000")
         .start();
        
        fps.config({ x: v.viewport.w - 100 });
        v.components(starfield);
        v.components(fps);
         
        document.getElementById("pause")
                .onclick = function() {
                    v.pause();
                    if (v.isPaused) {
                        this.innerHTML = "Unpaused";
                    } else {
                        this.innerHTML = "Pause";
                    }
                };
    });
});