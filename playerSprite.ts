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
}

