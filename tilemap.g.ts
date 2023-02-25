// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level2":return tiles.createTilemap(hex`100010000303030303181717171717171902020d010101010311020203030403110202020101020102110202020303031102020218171717171402020203030311020202160303030202020202030303110102021603030303020202020304031101010116020203030302060905030311010401160202030303030b100c03031419010315131314030301070a080303031103030202031603040103010301030311020203030316030303030104010303141902030302151403010101030103021c1a1b010202021602010101010103020211020102020216020f03030303031d0211020101020e16030304030314131313120203010302151313131313120303020203`, img`
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . 2 . 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . 2 . . . 
. . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.swamp.swampTile0,sprites.builtin.forestTiles7,sprites.builtin.forestTiles5,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.builtin.forestTiles6,sprites.builtin.forestTiles14,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile5,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003030303030303030903030303030303030303030303030808030303030303030303030303030303030303030303030307070702070702020202070702070707050505050505020202020505050505050707070207050505050505070207070704040404040404040404040404040404040404040404040404040404040404040601060601010106060101010606010606010606010101060601010106060106010101010101010101010101010101010b010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010a0101010101010101`, img`
. . . . . . . . 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 . 2 2 . . . . 2 2 . 2 2 2 
. . . . . . . . . . . . . . . . 
2 2 2 . 2 . . . . . . 2 . 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 . . 2 2 2 . . 2 2 2 . . 2 . 
. 2 . . 2 2 2 . . 2 2 2 . . 2 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile4,sprites.dungeon.stairSouth,sprites.dungeon.floorDark0,sprites.dungeon.floorDark4,sprites.dungeon.floorDarkDiamond,sprites.dungeon.stairNorth,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile9":
            case "tile11":return tile11;
            case "myTile11":
            case "tile13":return tile13;
            case "myTile12":
            case "tile14":return tile14;
            case "myTile10":
            case "tile12":return tile12;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
