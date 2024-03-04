class EventHandlerManager {
    private gameManager: GameManager;

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
        this.registerOverlapEvents();
        this.registerCountdownEvents();
        this.registerPathfindingEvents();
    }

    private registerOverlapEvents(): void {
        // GH1
        const hit = (contenderSprite: Contender, proj: Projectile): void => {
            if (proj.colour == contenderSprite.colour) {
                return;
            }
            contenderSprite.stun();
            proj.destroy();
        };

        sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, hit);
        sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, hit);
        // end GH1

        scene.onHitWall(SpriteKind.Enemy, (opponent: OpponentSprite, location: tiles.Location) => {
            opponent.changeDir()
        })

        //GH3
        const pickupStar = (contenderSprite: Contender, star: Star): void => {
            let tileImage = contenderSprite.tileImage;
            star.paintArea(tileImage);
            star.destroy();
        };
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, pickupStar);
        sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, pickupStar);
        // end GH3
    }

    private registerCountdownEvents(): void {
        info.onCountdownEnd(function time_up() {
            let reds = tiles.getTilesByType(assets.tile`red`).length;
            let blues = tiles.getTilesByType(assets.tile`blue`).length;
            let greens = tiles.getTilesByType(assets.tile`green`).length;
            if (reds > blues && reds > greens) {
                game.over(true);
            } else {
                game.over(false);
            }
        })
    }

    private registerPathfindingEvents(): void {
        scene.onPathCompletion(SpriteKind.Enemy, (opponent: OpponentSprite, location: tiles.Location) => {
            opponent.changeDir();
        })
    }
}