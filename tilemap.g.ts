// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`18001800030303030303030303030303030303030303030303030303030102020202020202020202030202020202020202020203030202020202020202020202030202020202020202020203030202020202020202020202030202020202020202020203030202020303030302020303030302020303030202020203030202020302020202020202020202020202020202020203030202020302020202020202020202020202020202020203030202020302020303020202030303020202030202020203030202020302020203020202030303020202030202020203030202020202020203020202020202020202030202020203030202020202020203030202020202020202030302020203030202020302020202020202010302020202020202020203030202020302020202020202020302020202020202020203030202020302020202020202020302020202020203030303030303030303030303020203030303030202020202020203030202020202020202020202020202030202020202020203030202020202020202020202020202020202020203020203030202020202020202020202020202020202020203020203030202020302020203030303030302020202020203020203030202020302020203020202020202020203030303020203030202020303020303020202020202020203020202020203030202020202020202020202030302020202020202020203030202020202020202020203030303020202020202020103030303030303030303030303030303030303030303030303`, img`
222222222222222222222222
2...........2..........2
2...........2..........2
2...........2..........2
2...2222..2222..222....2
2...2..................2
2...2..................2
2...2..22...222...2....2
2...2...2...222...2....2
2.......2.........2....2
2.......22........22...2
2...2........2.........2
2...2........2.........2
2...2........2......2222
222222222..22222.......2
2..............2.......2
2...................2..2
2...................2..2
2...2...222222......2..2
2...2...2........2222..2
2...22.22........2.....2
2...........22.........2
2..........2222........2
222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile4,sprites.builtin.brick], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "spawn":
            case "tile1":return tile1;
            case "red":
            case "tile2":return tile2;
            case "green":
            case "tile5":return tile5;
            case "transparency16":return transparency16;
            case "blank0":
            case "tile4":return tile4;
            case "blue":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
