// GH1
class Projectile extends sprites.ExtendableSprite {
    public colour: number;

    constructor(contenderSprite: Contender) {
        super(image.create(4, 4), SpriteKind.Projectile);
        this.colour = contenderSprite.colour;
        this.image.fill(this.colour);
        this.setFlag(SpriteFlag.DestroyOnWall, true);
        this.setPosition(contenderSprite.x, contenderSprite.y);
        this.lifespan = 5000;
    }
}
// end GH1