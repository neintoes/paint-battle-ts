class GameManager {
    private playerSprite: PlayerSprite;
    private eventHandlerManager: EventHandlerManager;

    constructor() {
        scene.setTileMapLevel(assets.tilemap`level`)
        this.initialisePlayers();
        this.onUpdates();
        this.eventHandlerManager = new EventHandlerManager(this);
        info.startCountdown(120);
    }

    private initialisePlayers(): void {
        this.playerSprite = new PlayerSprite(assets.image`red player`, assets.tile`red`, 3);
        scene.cameraFollowSprite(this.playerSprite);
        new OpponentSprite(assets.image`blue player`, assets.tile`blue`, 6);
        new OpponentSprite(assets.image`green player`, assets.tile`green`, 9);
    }

    private onUpdates(): void {
        game.onUpdate(function tick() {
            sprites.allOfKind(SpriteKind.Enemy).forEach((opponent: OpponentSprite) => {
                opponent.behaviour();
            })
            this.playerSprite.placeTile();
        })
    }
}
