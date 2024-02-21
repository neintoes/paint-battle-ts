class PlayerSprite extends Contender {
    // GH1
    constructor(spriteImage: Image, tileImage: Image, colour: number) {
        super(SpriteKind.Player, spriteImage, tileImage, colour)
        this.registerControls();
    }
    // end GH1

    private registerControls(): void {
        controller.moveSprite(this, this.speed);
        // GH1
        controller.A.onEvent(ControllerButtonEvent.Pressed, () => {
            this.fire();
        })
        // end GH1
    }

    // GH1
    public updateAim(): void {
        if (this.vx != 0 || this.vy != 0) {
            this.lastVx = this.vx;
            this.lastVy = this.vy;
        }
    }
    // end GH1
}

