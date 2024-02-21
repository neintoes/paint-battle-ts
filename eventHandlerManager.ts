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
        function hit(contenderSprite: Contender, proj: Projectile): void {
            if (proj.colour == contenderSprite.colour) {
                return;
            }
            contenderSprite.stun();
            proj.destroy();
        }
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function hit(contenderSprite, proj) {});
        sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function hit(contenderSprite, proj) {});
        // end GH1

        scene.onHitWall(SpriteKind.Enemy, (opponent: OpponentSprite, location: tiles.Location) => {
            opponent.changeDir()
        })
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