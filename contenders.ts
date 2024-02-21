abstract class Contender extends sprites.ExtendableSprite {
    protected speed: number = 75;
    protected tileImage: Image;
    // GH1
    public colour: number;
    public lastVx: number = 100;
    public lastVy: number = 0;
    // end GH1

    // GH1
    constructor(spriteKind: number, spriteImage: Image, tileImage: Image, colour: number) {
    // end GH1
        super(spriteImage, spriteKind);
        this.tileImage = tileImage;
        // GH1
        this.colour = colour;
        // end GH1
        this.spawn();
    }

    private spawn(): void {
        tiles.placeOnRandomTile(this, assets.tile`spawn`);
        tiles.setTileAt(this.tilemapLocation(), this.tileImage);
    }

    public placeTile(): void {
        tiles.setTileAt(this.tilemapLocation(), this.tileImage);
    }

    // GH1
    public fire(): void {
        new Projectile(this);
    }

    public stun(): void {
        for(let i = 0; i < 100; i++) {
            tiles.placeOnTile(this, this.tilemapLocation());
            pause(10);
        }
    }
    // end GH1
}

class OpponentSprite extends Contender {
    // GH1
    constructor(spriteImage: Image, tileImage: Image, colour: number) {
        super(SpriteKind.Enemy, spriteImage, tileImage, colour);
        this.changeDir();
    }
    // end GH1

    public changeDir(): void {
        let yVel: number;
        let xVel: number;
        if (this.vx != 0) {
            yVel = randint(0, 1) * this.speed * 2 - this.speed
            this.setVelocity(0, yVel)
        } else {
            xVel = randint(0, 1) * this.speed * 2 - this.speed
            this.setVelocity(xVel, 0)
        }
    }

    private targetTileNotOwned(): void {
        let start = this.tilemapLocation();
        let targets = tilesAdvanced.getAllTilesWhereWallIs(false);
        let ownedTiles = tiles.getTilesByType(this.tileImage);
        for (let target of targets) {
            if (tilesAdvanced.tileIsInList(target, ownedTiles)) {
                targets.removeElement(target);
            }
        }
        let sortedTargets = tilesAdvanced.sortListOfTilesByDistance(start, targets);
        let path = scene.aStar(start, sortedTargets[0]);
        scene.followPath(this, path, this.speed);
    }

    public behaviour() {
        tiles.setTileAt(this.tilemapLocation(), this.tileImage);
        if (randint(1, 50) == 1) {
            this.changeDir();
        } else if (randint(1, 50) == 1) {
            this.targetTileNotOwned();
        }
        if (randint(1, 150) == 1) {
            this.fire();
        }
        this.placeTile();
    }
}

