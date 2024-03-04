// GH3
abstract class Collectable extends sprites.ExtendableSprite {
    constructor(spriteImage: Image, spriteKind: number) {
        super(spriteImage, spriteKind);
        this.spawn()
    }

    private spawn(): void {
        let randomTile = tilesAdvanced.getAllTilesWhereWallIs(false)._pickRandom();
        tiles.placeOnTile(this, randomTile);
    }
}

class Star extends Collectable { 
    lifespanLength: number = 7500;

    constructor() {
        super(assets.image`star`, SpriteKind.Food);
        this.lifespan = this.lifespanLength;
    }

    public paintArea(tileImage: Image): void {
        let localTiles = tilesAdvanced.getAdjacentTiles(Shapes.Square, this.tilemapLocation(), 2);
        for (let tile of localTiles) {
            if (!tiles.tileAtLocationIsWall(tile)) {
                tiles.setTileAt(tile, tileImage);
            }
        }
    }
}
// end GH3