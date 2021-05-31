class Drops {
    constructor(x, y) {
        var options = {
            friction: true,
        }
        this.rain = Bodies.circle(x, y, 5, options);
        this.radius = 5;
        World.add(world, this.rain)
    }

    update() {
        if (this.rain.position.y > height) {
            Matter.Body.setPosition(this.rain, {
                x: random(0, 400),
                y: random(0, 400)
            })
        }
    }
}