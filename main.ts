namespace SpriteKind {
    export const npc = SpriteKind.create()
    export const compete = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc, function (sprite, otherSprite) {
    dieologmode = true
    game.showLongText("if you want the king treasure you must first answer to us. the first question what armour can you access right now?", DialogLayout.Bottom)
    story.showPlayerChoices("basic armour", "medimun armour", "legends armour")
    if (story.checkLastAnswer("basic armour")) {
        info.changeScoreBy(5)
        kights.setKind(SpriteKind.compete)
    } else if (story.checkLastAnswer("medimun armour")) {
        info.changeLifeBy(-1)
        dieologmode = false
    } else if (story.checkLastAnswer("legends armour")) {
        info.changeLifeBy(-1)
        dieologmode = false
    }
    pause(1000)
    game.showLongText("good,second question what dose the old man give you that heals you", DialogLayout.Bottom)
    story.showPlayerChoices("your mom", "med kit", "soup")
    if (story.checkLastAnswer("your mom")) {
        info.changeLifeBy(-1)
        dieologmode = false
    } else if (story.checkLastAnswer("medkit")) {
        info.changeLifeBy(-1)
        dieologmode = false
    } else if (story.checkLastAnswer("soup")) {
        info.changeScoreBy(10)
    }
    pause(1000)
    game.showLongText("good final question,what is the name of our king ", DialogLayout.Bottom)
    story.showPlayerChoices("the great king mahd the forth", "prince philup", "the great king unchel brent")
    if (story.checkLastAnswer("the great king mahd the forth")) {
        info.changeScoreBy(30)
    } else if (story.checkLastAnswer("prince philup")) {
        info.changeLifeBy(-1)
        game.showLongText("TRAITOR!!!", DialogLayout.Bottom)
        dieologmode = false
    } else if (story.checkLastAnswer("the great king unchel brent")) {
        game.showLongText("TRAITOR!!!", DialogLayout.Bottom)
        info.changeLifeBy(-1)
        dieologmode = false
    }
    game.showLongText("you have past the test.you may get the kings tresure", DialogLayout.Bottom)
    pause(100)
    rolaltyplayer = true
    upgradedplayer = false
    playerspirt.setImage(assets.image`myImage7`)
    dieologmode = false
    sprites.destroy(kights, effects.blizzard, 500)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (upgradedplayer == true) {
        playerspirt.setImage(assets.image`player3`)
    } else if (rolaltyplayer == true) {
        playerspirt.setImage(assets.image`player5`)
    } else {
        playerspirt.setImage(assets.image`player0`)
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile`)) {
        game.showLongText("thanks for taking down those spiders.they were big as a reward you shall get my soap.", DialogLayout.Bottom)
        pause(1000)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        info.changeLifeBy(1)
        dieologmode = true
    } else if (tiles.tileAtLocationEquals(location, assets.tile`myTile0`)) {
        game.showLongText("i see your trying to escape those spiders, ey,here have my basic amour and also a weapon ", DialogLayout.Bottom)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        upgradedplayer = true
        playerspirt.setImage(assets.image`myImage2`)
    } else if (tiles.tileAtLocationEquals(location, assets.tile`myTile7`)) {
        if (rolaltyplayer == true) {
            game.showLongText("i see you have passed the test of my guards,you may enter my lair", DialogLayout.Bottom)
        } else {
            game.showLongText("ahh if it isn't the poor boy himself. nice suit you got there.my name is the great king Mahd the fourth .remember that i hearn rumors about a test, you if you succed you get something priceless.", DialogLayout.Bottom)
        }
    } else if (tiles.tileAtLocationEquals(location, assets.tile`myTile4`)) {
        tiles.setCurrentTilemap(tilemap`level1`)
        scene.setBackgroundColor(14)
    }
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile10`)) {
        if (rolaltyplayer == true) {
            game.showLongText("please save my wife", DialogLayout.Bottom)
        } else {
            game.showLongText("go away go.", DialogLayout.Bottom)
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (rolaltyplayer == true) {
        thegoldeneagle = sprites.createProjectileFromSprite(assets.image`myImage11`, playerspirt, 100, 0)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (upgradedplayer == true) {
        playerstab = true
        playerspirt.setImage(assets.image`myImage6`)
        pause(500)
        playerspirt.setImage(assets.image`myImage5`)
        pause(2000)
        playerspirt.setImage(assets.image`myImage2`)
    } else if (rolaltyplayer == true) {
        rolaltyshash = true
        playerspirt.setImage(assets.image`myImage9`)
        pause(100)
        playerspirt.setImage(assets.image`myImage10`)
        rolaltyshash = false
    } else {
        playerpunch = true
        playerspirt.setImage(assets.image`player2`)
        pause(200)
        playerspirt.setImage(assets.image`myImage3`)
        playerpunch = false
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (upgradedplayer == true) {
        playerspirt.setImage(assets.image`myImage2`)
    } else if (rolaltyplayer == true) {
        playerspirt.setImage(assets.image`myImage7`)
    } else {
        playerspirt.setImage(assets.image`myImage3`)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (upgradedplayer == true) {
        playerspirt.setImage(assets.image`myImage4`)
    } else if (rolaltyplayer == true) {
        playerspirt.setImage(assets.image`myImage8`)
    } else {
        playerspirt.setImage(assets.image`myImage`)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (true) {
        if (playerstab == true) {
            sprites.destroy(sprite, effects.disintegrate, 500)
        } else {
            info.changeLifeBy(-1)
            pause(1000)
        }
    } else if (rolaltyshash == true) {
        sprites.destroy(sprite, effects.fire, 500)
    } else {
        info.changeLifeBy(-1)
        pause(1000)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (upgradedplayer == true) {
        playerspirt.setImage(assets.image`player4`)
    } else if (rolaltyplayer == true) {
        playerspirt.setImage(assets.image`player6`)
    } else {
        playerspirt.setImage(assets.image`player1`)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    info.changeLifeBy(1)
})
let playerpunch = false
let rolaltyshash = false
let playerstab = false
let thegoldeneagle: Sprite = null
let upgradedplayer = false
let rolaltyplayer = false
let dieologmode = false
let kights: Sprite = null
let spiderenimey: Sprite = null
let playerspirt: Sprite = null
info.setLife(3)
tiles.setCurrentTilemap(tilemap`level`)
scene.setBackgroundColor(6)
playerspirt = sprites.create(assets.image`myImage3`, SpriteKind.Player)
info.setScore(0)
scene.cameraFollowSprite(playerspirt)
for (let index = 0; index < 8; index++) {
    spiderenimey = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    spiderenimey.follow(playerspirt, 20)
    spiderenimey.setPosition(randint(35, 220), randint(35, 220))
}
kights = sprites.create(assets.image`knight`, SpriteKind.npc)
tiles.placeOnTile(kights, tiles.getTileLocation(3, 5))
dieologmode = false
forever(function () {
    if (dieologmode == false) {
        controller.moveSprite(playerspirt, 100, 100)
    } else if (dieologmode == true) {
        controller.moveSprite(playerspirt, 0, 0)
    }
})
