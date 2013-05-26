define(["virality", "components/sprite"], function(v, sprite) {
    var bombs = [];

    v.components({
        name: "Player!",
        init: function() {
            sprite.create(32, { name: "sprite", media: "sprites.png" }, {
                ship: { x: 0, y: 0 },
                bomb: { x: 1, y: 0 }
            });

            for(var i = 0; i < 1000; i++) {
                bombs.push({
                    sprite: "bomb",
                    x: Math.floor((Math.random() * v.viewport.w) + 1),
                    y: Math.floor((Math.random() * v.viewport.h) + 1)                    
                });
            }
        },
        update: function(elapsed) {
            for(var i in bombs) {
                bombs[i].x += 10 / elapsed;
            }
        },
        render: function(context, elapsed) {
            sprite.draw(context, "ship", 0, 0);
            
            for(var i in bombs) {
                sprite.draw(context, bombs[i].sprite, bombs[i].x, bombs[i].y);
            }
        }
    });
});