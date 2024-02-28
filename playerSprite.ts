class PlayerSprite extends Contender {
    readonly dashLen: number = 250;
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

        // GH2
        controller.combos.attachCombo("uu", () => {
            this.throttleDash();
        })
        controller.combos.attachCombo("dd", () => {
            this.throttleDash();
        })
        controller.combos.attachCombo("ll", () => {
            this.throttleDash();
        })
        controller.combos.attachCombo("rr", () => {
            this.throttleDash();
        })
        // end GH2
    }

    // GH2
    private endDash(): void {
        controller.moveSprite(this);
        this.setVelocity(0, 0);
    }

    private dash(): void {
        let vx = this.vx;
        let vy = this.vy
        controller.moveSprite(this, 0, 0);
        this.startEffect(effects.ashes, this.dashLen);
        this.vx = vx * 2.5;
        this.vy = vy * 2.5;
        timer.after(this.dashLen, () => {
            this.endDash();
        });
    }

    private throttleDash(): void {
        timer.throttle("dash", 2000, () => {
            this.dash();
        });
    }
    // end GH2
}

