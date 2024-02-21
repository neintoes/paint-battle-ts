// GH1
class Projectile extends sprites.ExtendableSprite {
    public colour: number;

    constructor(contenderSprite: Contender) {
        super(image.create(4, 4), SpriteKind.Projectile);
        this.colour = contenderSprite.colour;
        this.image.fill(this.colour);
        this.setFlag(SpriteFlag.DestroyOnWall, true);
        this.setPosition(contenderSprite.x, contenderSprite.y);
        this.fire(contenderSprite);
        this.lifespan = 5000;
    }

    private fire(contenderSprite: Contender): void {
        if (contenderSprite instanceof PlayerSprite) {
            this.vx = contenderSprite.vx * 1.3;
            this.vy = contenderSprite.vy * 1.3;
        } else if (contenderSprite instanceof OpponentSprite) {
            this.vx = contenderSprite.vx * 2;
            this.vy = contenderSprite.vy * 2;
        }
    }
}
// end GH1