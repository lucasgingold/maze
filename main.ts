controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 1 1 2 7 7 . . . . . 
        . . . . d 2 7 1 7 7 d . . . . . 
        . . . . . 7 7 1 7 7 . . . . . . 
        . . . . . d d . d d . . . . . . 
        . . . . . 1 1 . 1 1 . . . . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    game.showLongText("What !?! ", DialogLayout.Full)
    game.showLongText("Well.. It looks like you've found the master of the dungeons", DialogLayout.Full)
    game.showLongText("Welcome to my lair ", DialogLayout.Full)
    game.showLongText("I created this dungeon so Ronaldo never takes my title as the GOAT", DialogLayout.Full)
    tiles.setTilemap(tilemap`level5`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 8))
    info.stopCountdown()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    bogey.startEffect(effects.spray)
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e d d d d d e . . . . . 
        . . . . d d f d f d d . . . . . 
        . . . . d d d d d d d . . . . . 
        . . . . e e d d d e e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . d 8 8 2 8 2 8 8 d . . . . 
        . . . d 8 8 2 8 2 8 8 d . . . . 
        . . . . . 8 2 8 2 8 . . . . . . 
        . . . . . 8 2 8 2 8 . . . . . . 
        . . . . . d d . d d . . . . . . 
        . . . . . 8 8 . 8 8 . . . . . . 
        `, SpriteKind.Enemy)
    bogey.follow(mySprite, 100)
    mySprite.setVelocity(10, 10)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    info.startCountdown(20)
    info.setScore(2)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . d d d f f f . . . . . 
        . . . . . d f d d f f . . . . . 
        . . . . d d d d d d f . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . d 2 2 2 2 2 7 . . . . . . 
        . . . d 2 2 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . d d . d d . . . . . . 
        . . . . . 1 1 . 1 1 . . . . . . 
        `],
    500,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f d d d . . . . . 
        . . . . . f f d d f d . . . . . 
        . . . . . f d d d d d d . . . . 
        . . . . . . d d d d d . . . . . 
        . . . . . . d d d d d . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . 7 2 2 2 2 2 d . . . 
        . . . . . . 7 7 7 7 2 2 d . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . d d . d d . . . . . 
        . . . . . . 1 1 . 1 1 . . . . . 
        `],
    500,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . d d d d d d d . . . . . 
        . . . . d d f d f d d . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 1 1 2 7 7 . . . . . 
        . . . . d 2 7 1 7 7 d . . . . . 
        . . . . . 7 7 1 7 7 . . . . . . 
        . . . . . d d . d d . . . . . . 
        . . . . . 1 1 . 1 1 . . . . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    music.stopAllSounds()
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 8))
    tiles.setTilemap(tilemap`level0`)
    info.startCountdown(10)
    game.showLongText("You have completed the first level", DialogLayout.Full)
    game.showLongText("Easy .. right ?", DialogLayout.Full)
    game.showLongText("But there is more to come..", DialogLayout.Full)
    game.showLongText("Each level with get gradually harder ", DialogLayout.Full)
    game.showLongText("so don't get the wrong idea .. ok ?", DialogLayout.Full)
    game.showLongText("This isn't easy !", DialogLayout.Full)
    music.play(music.createSong(hex`007d000408010402001c000c960064006d019001000478002c010000640032000000000a060005270000000400012704000800012a08000c000220271000140002242a1400180002202718001c00011d03001c0001dc00690000045e01000400000000000000000000056400010400032000000004000120040008000224270c001000012018001c0002242a1c002000012006001c00010a006400f401640000040000000000000000000000000000000002300000000400011b04000800011b08000c00011b0c001000011b10001400011b14001800011b18001c00011b1c002000011b08001c000e050046006603320000040a002d000000640014000132000201000206001c0020000127`), music.PlaybackMode.LoopingInBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    info.startCountdown(15)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    tiles.setCurrentTilemap(tilemap`level3`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    info.startCountdown(20)
    info.setScore(2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    info.setScore(1)
    info.startCountdown(10)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    info.startCountdown(20)
    info.setScore(2)
})
let bogey: Sprite = null
let mySprite: Sprite = null
game.showLongText("Start", DialogLayout.Full)
pause(1000)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777fffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777fffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff7777777277777777fffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff55555555ffffffffffffffffffffffffffffffffffffffffffffffffff7777777222277777777fffffffffffffffffffff5555555ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff55555555ffffffffffffffffffffffffffffffffffffffffffffffff7777777222ff22277777777fffffffffffffffffff5555555ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff55555555fffffffffffffffffffffffffffffffffffffffffffffff7777777222fffffff27777777ffffffffffffffffff555555fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffff7777777222ffffffffffff77777ffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff7777772222ffffffffffff222777ffffffffffffffffffffffffffffffffffffffffffffffffff5555fffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777222ffffffffffffff222777ffffffffffffffffffffffffffffffffffffffffffffffffff5555fffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777222ffffffffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffff555555555fffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777222fffffffffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffff555555555fffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777222fffffffffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffff555555555fffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff777777722fffffffffffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffff555555555fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff777777222ffffffffffffffffffff222777ffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff77777722ffffffffffffffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff777777222fffffffffffffffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff777777222ffffffffffffffffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff777777722ffffffffffff2222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff7777777222ffffffffffff22222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff777777722ffffffffffff2222222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff7777777222ffffffffffff22222222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff777777722fffffffffffff222777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff77777722ffffffffffff22227777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff777772222ffffffffffff222277777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff777222fffffffffffff22222777772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff77722fffffffffffff222227777772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff77722fffffffffff22222777777772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff77772ffffffffff222227777777772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff77772ffffffffff222227777777772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff77772fffffffff22222777777f7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff7772fffffff22222277777fff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff77772fff2222222277777ffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff77772222222222277777fffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff7772222222277777777fffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff27777777777777777fffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff5555ffffffffffffffffff7777777777777777fffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffff
    fffffffffffffffffffffff5555ffffffffffffffffff7777777777fffffffffff7772222ffffffffff222777ffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555fffffffff
    fffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffff7772222ffffffffff222777ffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555fffffffff
    fffffffffffffffffffff55555555fffffffffffffffffffffffffffffffffffff7772222ffffffffff222777ffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555fffffffff
    fffffffffffffffffffff55555555fffffffffffffffffffffffffffffffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffff
    fffffffffffffffffffff55555555fffffffffffffffffffffffffffffffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffff
    ffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffff
    ffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7772222ffffffffff222777ffffffffffffffffffffffffffffffffffff2222222222222222fffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff222222ffffffffffffffffffff7772222ffffffffff222777fffffffffffffffffffffff22222222222222222222222222222fffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff2222222222ffffffffffffffff7772222ffffffffff222777fffffffffffffffffffffff22222222222222222222222222222fffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff22222222222fffffffffffffff7772222ffffffffff222777ffffffffffffffffffffff2222222222222222111111111112222ffffffffffffffffff
    fffffffffff2222222222222222222222fffff22211111222222ffffffffffffff7772222ffffffffff222777ffffffffffffffffffffff2221111111111111111111111112222ffffffffffffffffff
    fffffffffff2222222222222222222222ffff2222111111122222fffffffffffff7772222ffffffffff222777ffffffffffffffffffffff2221111111222222222221111112222ffffffffffffffffff
    ffffffff222222222222222222222222222ff2222111111112222fffffffffffff7772222ffffffffff222777fffffffffffffffffffffff222222222222222222221111222fffffffffffffffffffff
    ffffffff222111111111111111111111222ff222111ff111112222ffffffffffff7772222ffffffffff222777fffffffffffffffffffffff222222222222222222221122222fffffffffffffffffffff
    ffffffff222111111111111111111111222ff222111ff111112222ffffffffffff7772222ffffffffff222777fffffffffffffffffffffff222222222222222222221122222fffffffffffffffffffff
    ffffffff222111222222222222222222222ff222111fffff1122222fffffffffff7772222ffffffffff222777fffffffffffffffffffffff22222222222fffff22211122222fffffffffffffffffffff
    ffffffff22211f22222222222222222222fff222111fffff11122222ffffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffff222122222fffffffffffffffffffffff
    ffffffff22212222222222222222222222fff222111ffffff11122222fffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffffff2221222fffffffffffffffffffffffff
    ffffffff2221222ffffffffffffffffffffff222111fffffff1112222fffffffff7772222ffffffffff222777ffffffffffffffffffffffffffffffffffffffff111222fffffffffffffffffffffffff
    ffffffff2221222ffffffffffffffffffffff22211fffffffff1112222ffffffff7772222ffffffffff222777ffffffffffffffffffffffffffffffffffffff2221222ffffffffffffffffffffffffff
    fffffff22221222ffffffffffffffffffffff22211ffffffffff111222ffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffff22221222ffffffffffffffffffffffffff
    fffffff22221222ffffffffffffffffffffff22211ffffffffff111222ffffffff7772222ffffffffff222777fffffffffffffffffffffffffffffffffffff22221222ffffffffffffffffffffffffff
    fffffff22211222ffffffffffffffffffffff22211ffffffffff112222ffffffff7777722ffffffffff222777ffffffffffffffffffffffffffffffffffff222211222ffffffffffffffffffffffffff
    fffffff22212222ffffffffffffffffffffff22211fff1111111112222ffffffff7777722ffffffffff222777ffffffffffffffffffffffffffffffffffff222111222ffffffffffffffffffffffffff
    fffffff22212222ffffffffffffffffffffff22211111111111112222ffffffffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff222111222ffffffffffffffffffffffffff
    fffffff2221222fffffffffffffffffffffff22211111111112222222ffffffffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff222111222ffffffffffffffffffffffffff
    fffffff2221222fffffffffffffffffffffff22211111111222222222ffffffffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff222111222ffffffffffffffffffffffffff
    ffffff22221222fffffffffffffffffffffff222111122222222222ffffffffffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff2221222ffffffffffffffffffffffffffff
    ffffff22221222fffffffffffffffffffffff222111122222222fffffffffffffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff22212222fffffffffffffffffffffffffff
    ffffff22211222fffffffffffffffffffffff22211112222222222fffffffffffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff22212222fffffffffffffffffffffffffff
    ffffff22212222fffffffffffffffffffffff222111111111222222ffffffffffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff22211222fffffffffffffffffffffffffff
    ffffff22212222fffffffffffffffffffffff22211f1111112222222fffffffffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff22211222fffffffffffffffffffffffffff
    ffffff22212222fffffffffffffffffffffff22211f1111112222222fffffffffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff22211222fffffffffffffffffffffffffff
    ffffff2221222ffffffffffffffffffffffff22212222211111122222ffffffffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff22211222fffffffffffffffffffffffffff
    fffff22221222ffffffffffffffffffffffff2221222222221111222222ffffffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff22211222fffffffffffffffffffffffffff
    fffff22221222ffffffffffffffffffffffff22212222222222111222222fffffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff22211222fffffffffffffffffffffffffff
    fffff22211222ffffffffffffffffffffffff222122222222222111222222ffffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff22211222fffffffffffffffffffffffffff
    fffff22212222ffffffffffffffffffffffff2221222ff2222222211122222fffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff22211222fffffffffffffffffffffffffff
    fffff222122222222ffffffffffffffffffff2221222fffff22222221122222ffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff22211222fffffffffffffffffffffffffff
    fffff222122222222222222222fffffffffff2221222ffffff2222222212222ffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff22211222fffffffffffffffffffffffffff
    fffff22211f22222222222222222222ffffff2221222ffffffff22222222222ffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff22211222fffffffffffffffffffffffffff
    ffff2222111111f2222222222222222ffffff2221222ffffffffff22222222fffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff22211222fffffffffffffffffffffffffff
    ffff222222222111111122222222222ffffff2222222ffffffffffff222222fffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff22211222fffffffffffffffffffffffffff
    ffff22222222222222221111111111222ffff2222222fffffffffffffffffffffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff22211222fffffffffffffffffffffffffff
    fffffff22222222222222222222211222ffffff22222fffffffffffffffffffffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffff
    fffffffffff2222222222222222222222ffffffffffffffffffffffffffffffffff777722ffffffffff222777ffffffffffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffff
    ffffffffffffffffff22222222222222fffffffffffffffffffffffffffffffffff777722ffffffffff222777fffffffffffffffffffffffffffffffffffff2222222fffffffffffffffffffffffffff
    ffffffffffffffffffffffffff222222fffffffffffffffffffffffffffffffffff777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777722ffffffffff222777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
pause(1000)
scene.setBackgroundImage(img`
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222ffffffffffffff888888888888ffffffffff2222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222ffffffffffffff88888888888888fffffffffff222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222fffffffffffff2222222222222222222222222fffffffffffff888888888888888888fffffffff222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222ffffffffffffff2222222222222222222222ffffffffffff88888888822222222288888ffffffff22222222222222222222222222222222222222222222222222222222222222222222222
    2222222222fffffffffffffff22222222222222222222ffffffffffff8888888822222222222888888fffffff22222222222222222222222222222222222222222222222222222222222222222222222
    2222222222fffffffffffffff22222222222222222222ffffffffffff8888888822222222222888888fffffff22222222222222222222222222222222222222222222222222222222222222222222222
    2222222222fff55555552fffff222222222222222222fffffffffff8888888822222222222222888888fffffff2222222222222222222222222222222222222222222222222222222222222222222222
    2222222222ff555555552ffffff222222222222222fffffffffff888888882222222222222222288888fffffff22222222ffff222222222222222222222222222222222222222222222222222fff2222
    2222222222ff55555555222fffff2222222222222fffffffffff88888888222222222222222222288888ffffff22222222ffff222222222222222222222222222222222222222222222222222fff5552
    2222222222ff55522222222fffff222222222222ffffffffff88888882222222222222222222222888888ffffff2222222ffff222222222222222222222222222222222222222222222222222fff5552
    2222222222ff555222222222ffff2222222222ffffffffff88888882222222222222222222222222288888fffff2222222ffff222222222222222222222222222222222222222222222222222fff5552
    2222222222ff5552222222222ffff22222222fffffffff88888888222222222222222222222222222288888fffff222222ffff222222222222222222222222222222222222222222222222222fff5552
    2222222222ff5552222222222ffff2222222fffffffff8888888222222222222222222222222222222288888ffff222222ffff222222222222222222222222222222222222222222222222222fff5552
    2222222222ff55522222222222fff2222222fffffff888888822222222222222222222222222222222228888ffff222222ffff2222222222222222222222222222222222222222222222222222ff5552
    2222222222ff55522222222222fff222222ffffff88888882222222222222222222222222222222222222888ffff222222ffff2222222222222222222222222222222222222222222222222222ff5552
    2222222222ff55522222222222fff222222fffff888888822222222222222222222222222222222222222888ffff222222ffff2222222222222222222222222222222222222222222222222222ff5552
    2222222222ff55522222222222fff222222fffff888882222222222222222222222222222222222222222888ffffffffffffff2222222222222222222222222222222222222222222222222222ff5552
    2222222222ff55522222222222fff222222fffff888222222222222222222222222222222222222222222888ffffffffffffffffffffff22222222222222222222222222222222222222222222ff5552
    2222222222ff55522222222222fff222222ffffff22222222222222222222222222222222222222222222888ffff555fffffffffffffff22222222222222222222222222222222222222222222ff5552
    2222222222ff55522222222222fff222222ffffff22222222222222222222222222222222222222222222888ffff555fffffffffffffff22222222222222222222222222222222222222222222ff5552
    2222222222ff55522222222222fff222222ffffff22222222222222222222222222222222222222222222888ffff555fffffffffffffff22222222222222222222222222222222222222222222ff5552
    2222222222ff5552222222222ffff22222222222222222222222222222222222222222222222222222228888ffff555ffffff22222222222222222222222222222222222222222222222222222ff5552
    2222222222ff5552222222222ffff22222222222222222222222222222222222222222222222222222228888ffff22555ffff22222222222222222222222222222222222222222222222222222ff5552
    2222222222ff555222222222fffff2222222222222222222222222222222222222222222222222222288888fffff22555ffff22222222222222222222222222222222222222222222222222222ff5552
    2222222222ff5552222222ffffff22222222222222222fff222222222222222222222222222222222888888fffff22555ffff22222222222222222222222222222222222222222222222222222ff5552
    2222222222ff55522fffffffffff22222222222222222fff22222222222222222222222222222228888888ffffff22555ffff22222222222222222222222222222222222222222222222222222ff5552
    2222222222fff2ffffffffffff2222222222222222222fff222222222222222222222222222228888888ffffffff22555ffff22222222222222222222222222222222222222222222222222222ff5552
    2222222222fffffffffffffff22222222222222222222fff2fffffffffff22222222222222228888888fffffffff22555ffff22222222222222222222222222222222222222222222222222222ff5552
    2222222222ffffffffff222222222222222222222222ffffffffffffffff2222222222222288888888fffffffff222555ffff22222222222222222222222222222222222222222222222222222ff5555
    2222222222fffffff222222222222222222222222222fffff555555555552222222222222888888fffffffffff2222555ff2222222222222222222222222222222222222222222222222222222ff5555
    2222222222ff55522222222222222222222222222222fffff55555555555222222222228888888fffffffffff22222555ff2222222222222222222222222222222222222222222222222222222fff555
    2222222222ff5552222222222222222ffff222222222fff55555555555552222222222888888fffffffffffff22222555ff22222222222222222222222222222222222222222222222222222222ff555
    2222222222ff5552222222222222222ffff222222222fff55555555555552222222222888888fffffffffffff22222555ff22222222222222222222222222222222222222222222222222222222ff555
    2222222222ff55522222222222222fffffff22222222fff5555222222222222222222888888fffffffffffff222222555ff22222222222222222222222222222222222222222222222222222222ff555
    2222222222ff5552222222222222fffffffff2222222fff55552222222222222222888888fffffffffffff22222222555ff22222222222222222222222222222222222222222222222222222222ff555
    2222222222ff555222222222222fffffffffff222222ffff555222222222222222888888ffffffffffff2222222222555ff22222222fff22222fff22222222fffffff5552222222222222222222ff555
    7777777777ff55577777777777fffff5555fffff7777ffff55577777777777778888888fffffffffff777777777777555ff7777777555f77777f555777777ffffffff5557777777777777777777ff555
    7777777777ff5557777777777fffff555555ffff7777ffff555777777777777888888ffffffffff777777777777777555ff7777777555f77777f5555777ffffffffff55577777777ff555577777fff55
    7777777777ff5557777777777ffff75555555ffff777ffff55577777777778888888ffffffffff7777777777777777555ff7777777555f77777f5555777ffffff77fff77777777ffff555577777fff55
    7777777777ff5557777777777fff775555555ffff777ffff555777777777888888ffffffffff777777777777777777555ff7777777555f77777ff555777fff55557ff5557777ffffff555557777fff55
    7777777777ff5557777777777fff7777775555ffff77ffff55577777778888888fffffffff77777777777777777777555ff7777777555f77777ff555777fff55557f5555777fffffff755555577fff55
    7777777777ff5557777777777fff777777555555ff77ffff555777778888888fffffffff7777777777777777777777555ff7777777555f77777ff555777fff55557f555577ffffff77755555577fff55
    7777777777ff5557777777777fff777777755555fff7ffff55577778888888fffffffff77777777777777777777777555ff7777777555ff777fff555777fff55577f555777fffff777fff555557fff55
    7777777777ff5557777777777fff777777755555fff7ffff5557788888888ffffffff77777777777777777777777775555f777777755555577ff5555777fff7777ff555577ffff5557ffff55555fff55
    7777777777ff5557777777777fff7777775555fffff7fff77777888888fffffffffff77777777777777777777777775555f777777755555555555555777ffff777ff555577ffff5557ffff555555ff55
    7777777777ff5557777777777ffff777555555fffff77777778888888fffffffffff777777777777777777777777775555f777777755555555555555777fffff7fff555577ffff5557ffffff5555ff55
    7777777777ff5557777777777ffff777555555fffff77777778888888fffffffffff777777777777777777777777775555f777777755555555555555777fffff7fff555577ffff5557ffffff5555ff55
    7777777777ff5557777777777ffff77555555fffff7777777888888ffffffffff777777777777777777777777777777555f777777777f55555555557777ffffffffff55577ffff777fffffff5555ff55
    7777777777ff5557777777777fffff755555ffffff777777888888fffffffff777777777777777777777777777777777fff77777777777777777777777777fffffff555577fffff7fffffffffff7ff55
    7777777777ff55577777777777fffff555fffffff77777888888ffffffffff7777777777777777777777777777777777fff77777777777777777777777777fffffff555577ffffffffff7ffffff7ffff
    7777777777ff55577777777777ffffffffffff7777777888888fffffffff7777777777777777777777777777777777777777777777777777777777777777777fffff5555777fffffffff777ffff7ffff
    7777777777ff5557777777777777ffffff7777777778888888ffffffff777777777777777777777777777777777777777777777777777777777777777777777777ff5557777ffffffff7777777777777
    7777777777ff555777777777777777777777777777788888ffffffff77777777777777777777777777777777777777777777777777777777777777777777777777f55557777777777777777777777777
    7777777777ff5557777777777777777777777777778888ffffffff7777777777777777777777777777777777777777777777777777777777777777777777777777f55557777777777777777777777777
    7777777777ff555777777777777777777777777777888ffffffff77777777777777777777777777777777777777777777777777777777777fff777777777777777555577777777777777777777777777
    7777777777fff77777777777777777777777777777888ffffffff777777777777777777777777777777777777777777777777777777777555ff77777777777777f555577777777777777777777777777
    777777777777777777777777777777777777777777888fffffff7777777777777777777777777777777777777777777777777777777777555ff777777777777775555577777777777777777777777777
    777777777777777777777777777777777777777778888ffffff77777777777777777777777777777777777777777777777777777777777555ffff77777777777f5555777777777777777777777777777
    777777777777777777777777777777777777777778888ffff7777777777777777777777777777777777777777777777777777777777777555fffff7777777777f5557777777777777777777777777777
    77777777777777777777777777777777777777777888fffff77777777777777777777777777777777777777777777777777777777777775555ffffff777777fff5557777777777777777777777777777
    77777777777777777777777777777777777777777888fffff77777777777777777777777777777777777777777777777777777777777775555ffffff777777fff5557777777777777777777777777777
    77777777777777777777777777777777777777777888fffff7777777777777777777777777777777777777777777777777777777777777555555ffffffffffff55557777777777777777777777777777
    77777777777777777777777777777777777777778888ffff77777777777777777777777777777777777777777777777777777777777777555555555ffffffff555557777777777777777777777777777
    77777777777777777777777777777777777777778888ffff7777777777777777777777777777777777777777777777777777777777777777555555555555555555557777777777777777777777777777
    7777777777777777777777777777777777777777888ffff77777777777777777777777777777777777777777777777777777777777777777755555555555555555577777777777777777777777777777
    7777777777777777777777777777777777777777888ffff77777777777777777777777777777777777777777777777777777777777777777777775555555555555777777777777777777777777777777
    7777777777777777777777777777777777777788888fff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777788888fff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777778888ffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777778888ffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777788888ffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777788888ffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777778888fffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777778888fffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777778888ffff777777777777777777ffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777778888fffff777777777777fffffffffffffffffffffffffffffffffff7777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777778888fffff7777777777fffffffffffffffffffffffffffffffffffffff77777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777788888fffff77777777ffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777788888fffff7777777ffffffffffffffffff88888ffffffffffffffffffffffff77777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777788888fffff77777ffffffffffffff8888888888888888ffffffffffffffffffff777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777788888ffffffffffffffffffff8888888888888888888888888fffffffffffffff777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777888ffffffffffffffffff88888888888877888888888888888888ffffffffff777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777778888ffffffffffffff88888888888777777777777888888888888888fffffff777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777778888fffffff888888888888887777777777777777777778888888888fffffff777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777788888888888888888888877777777777777777777777777777888887777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777788888888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777788888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777788888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
pause(1000)
scene.setBackgroundImage(img`
    4444444444444444444444444444444444444444444888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444444444444444444444444448888888888888888888885555555555555555588888.8888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444444444444444444444444448888888888888855555555555551115555555555555888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444444444444444444444444488888888885555555555555555551115555555555555555588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444444444444444444444444488888555555555555555555555551115555555555555555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444444444444444444444444488885555555555555555555555555555555555555555555555888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444444444444444444444444488885555555555555555555511155555511155555555555555888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444444444444444444444444444888555555555555555555555111555555111555555555555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444444444444444444444444444888555555555555555555555111555555111555555555555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444444444444444444444444444888855555555511155522222222333333222222551115555555888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444444444444444444444444444888855555555511155522222222333333222222551115555555888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444444444444444444444444444888855555555511155522222222333333222222551115555555888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444444444444444444444444444888855555222222333522255553335553335553332222288888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444444444444444444444444444488885555222ffffffffffffffffffff3335553332222888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444444444444444444444444448888ffffffffffffffffffffffffffffff5553332222888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444444444444444444444444448fffffffffffffffffffffffffffffffffffffff55558888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffff558bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffff88bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff558888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555558888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff115555588888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1115555558888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11115555558888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444fffffffffffffffffff8888855551111111111111111fffffffffffffffffffffffffffffff11111155555588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444fffffffffff44444488888855551111111111111111111fffffffffffffffffffffffffffff111111155555588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444ffffff44444444888888855551111111111111111111111fffffffffffffffffffffffffff111111115555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444fffff444444448888888555511111111111111111111111fffffffffffffffffffffffffff1111111115555588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444444444444488888885555111111111111111111111111fffffffffffffffffffffffffff1111111111155558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444444444444488888855555111111111111111111111111ffffffffffffffffffffffffffff11111111111155588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444444444444888888555551111115555551111111111111ffffffffffffffffffffffffffff111111111111155588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444444444448888885555111111155555551111111111111fffffffffffffffffffffffffff555111111111111555888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444444444888885555111111555555555111111111111fffffffffffffffffffffffffff55555551111111115555888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444444444888885555111111555555588881111111111ffffffffffffffffffffffffffff55555551111111115555588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444444444488885555111111155555588888811111fffffffffffffffffffffffffffffff1115555551111111111555588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444444448888555111111155555888888888ffffffffffffffffffffffffffffffffff11111155555511111111555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444444444888855551111111555588888888fffffffffffffffffffffffffffffffffff111111115555551111111155558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444444888885555111111555558888888fffffffffffffffffffffffffffffffffff51111111155555551111111555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444444488885555511111155558888ffffffffffffffffffffffffffffffffffffff111111111111555551111111155558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444448888855551111111555588fffffffffffffffffffffffffffffffffffffff11111111111111555551111111555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444444488885555511111115558fffffffffffffffffffffffffffffffffffffff1111111111111111155555111111155558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444444888855551111111fffffffffffffffffffffffffffffffffffffffff5111111111111111111115555511111155558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444488888555555551111fffffffffffffffffffffffffffffffffffffff555111111111111111111111555511111115555888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444488855555515551111fffffffffffffffffffffffffffffffffffff55555111111111111111111111155551111115555888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444488855555515551111ffffffffffffffffffffffffffffffffff55555555111111111111111111111155551111111555888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444488855555115551111fffffffffffffffffffffffffffffff155555555111111111111111111111111155551111115558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444888855555115551111fffffffffffffffffffffffffffff55555555111111111111111111111111111155551111115558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444888855555115551111ffffffffffffffffffffff888885555555551111111111111111111111111111115551111111558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444888555555155551111ffffffffffffffffffffff8888888555555111111111111111111111111111111155551111115588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444888555555155551111fffffffffffffffffffffffffff88555555111111111111111111111111111111155551111115558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444888555555155511111fffffffffffffffffffffffffffff555581111111111111111111111111111111115551111115558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444888555551155511111fffffffffffffffffffffffffffffffff88111111111111111111111111111111115551111115558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444888555551155511111fffffffffffffffffffffffffffffffffff8111111111111111111111111111111155551111155588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444888555551555511111fffffffffffffffffffffffffffffffffffff11111111111111111111111111111155551111155558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444448888555551555511111fffffffffffffffffffffffffffffffffffff81111111111111111111111111111115551111115558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444448888555511555111111fffffffffffffffffffffffffffffffffffffff111111111111111111311111111115555111115558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444888855555115551111111ffffffffffffffffffffffffffffffffffffff881111111111111111111111111115555111115558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444448888555551155511111115ffffffffffffffffffffffffffffffffffffff88111111111111111111111111111555111115558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444448888555551155511111115ffffffffffffffffffffffffffffffffffffff88811111111111111111111111111555511115558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444888555555115551111111555ffffffffffffffffffffffffffffffffffff888811111111111111111111111115555111155588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444448885555551155511111155551fffffffffffffffffffffffffffffffffff8888811111111111111111111111155551111555888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444488855555511555111111555511111111555fffffffffffffffffffffffff8888881111111111111111111111115555111555888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444448885555551155511111155551111111155551fffffffffffffffffffffff88888881111111111111111111111155551115558888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444488855555511555111111555111111111155511ffffffffffffffffffffff88888888811111111111111111111115551115558888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444888555555115551111115551111111111555511fffffffffffffffffffff88888888881111111111111111111115551115558888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444448885555551155511111155511111111115555111ffffffffffffffffffff88888888888111111111111111111115551115558885888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444888855555115551111115551111111111555555111ffffffffffffffffff88888888888811111111111111111115551115555555888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444448888555551155511111155511111111111555555111fffffffffffffffff88888888888881111111111111111115551115555555888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444448885555511555111111555111111111111555555551ffffffffffffffff88888855588888111111111111111115551115555555888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444488855555115551111115551111111111111555555555fffffffffffffff88885555588888811111111111111115551115555555888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444488855555115551111115551111111111111115555555fffffffffffffff88855555588888888111111111111115551115555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444488855555115551111115551111111111111111115555fffffffffffffff88555558888888888811111111111115551115555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444488885555115555111115551111111111111111111155fffffffffffffff88555588888888888881111111111155551115555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444888855511155551111155511111111111111111111115ffffffffffffff5555558888888888888811111111115555111555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444448888855511555551111555511111111111111111111155ffffffffffffff555588888888888888881111111115551111555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444888855511155551111555555511111111111111111155ffffffffffffff55588888888888888888811111111555111555555888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444888855511155551111555555555555555555555555555fffffffffffffff1888888888888888888881111111555111555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444488855511115555111155555555555555555555555555fffffffffffffff1188888888888888888888811111555111555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444448888551111555551111111555555555555555555555ffffffffffffffff1111888888888888888888881115555111555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444888855511155555555511115555555551111111111fffffffffffffffff111118888888888888888888811555511555555888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444888855511111555555555555555555551111111111fffffffffffffffff111111888888888888888888555555111555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444448885555511115555555555555555511111111111ffffffffffffffffff111111188888888888888885555555111555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444444888555551111111555555555111111111111111fffffffffffffffffff111111118888888888888885555555115555588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444fffffffffffff555111111111111111111111111111111fffffffffffffffffff11111111188888888888888555881111555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444ffffffffffffffff51111111111111111111111111111ffffffffffffffffffff11111111111888888888888888881115555588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444ffffffffffffffffffffff1111111111111111111111111fffffffffffffffffffff1111111111118888888888888881115555588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444ffffffffffffffffffffffff11111111111111111111111fffffffffffffffffffff111111111111188888888888888111555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444ffffffffffffffffffffffffffff111111111111111111ffffffffffffffffffffff111111111111111888888888881115555588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444fffffffffffffffffffffffffffff1111111111111111ffffffffffffffffffffff11111111111111188888888888115555588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444ffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffff11111111111111118888888881155555888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444fffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffff1111111111111111118888888155555588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111118881155555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111115555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111155555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111555555588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111555555588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111115555555588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111155555555588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111555555555588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111555555555588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111555555555588888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111155555555558888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111555555555888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffff111111111111111111155555558888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444444444444ffffffffffffffffffffffffffffffffffffffff11111111111111111111111555515588888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444444444444444fffffffffffffffffffffffffffffffff11111111111111111111111555555555888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444444444444444444444444448888855555555511111111111111111111111111111555555588888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444444444444444444444444448888855555555555555111111111111111111555555555888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444444444444444444444444444888888888888555555555555555555555555555558888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444444444444444444444444444488888888888888885555555555555555555555588888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    444444444444444444444444444444444444444444448888888888888888888885555555555555111888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444444444444444444444444444444444444488888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444444444444444444444444444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444444444444444444444444444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
game.showLongText("Welcome to the maze ", DialogLayout.Full)
game.showLongText("You will be Cristiano Ronaldo and will have to complete various dungeons to win his first World Cup !", DialogLayout.Full)
game.showLongText("During each level its necessary you pick up his trophies", DialogLayout.Full)
game.showLongText("Good luck !", DialogLayout.Full)
tiles.setTilemap(tilemap`level1`)
music.play(music.createSong(hex`007d000408020800001c00010a006400f4016400000400000000000000000000000000050000041e0008000c00012424002800011d2c003000012034003800011d3c004000012001001c000f05001202c102c201000405002800000064002800031400060200040c0004000800012720002400012703001c0001dc00690000045e0100040000000000000000000005640001040003060024002800012a05001c000f0a006400f4010a0000040000000000000000000000000000000002180014001800011d1c002000012428002c00012738003c00012706001c00010a006400f401640000040000000000000000000000000000000002360000000400012a0400080001200c001000012718001c00012a1c00200001202400280001242c003000012a3400380001243c004000012a07001c00020a006400f4016400000400000000000000000000000000000000030c0010001400012434003800012a08001c000e050046006603320000040a002d0000006400140001320002010002060014001800012709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80037000400050001060c000d0002040a1400150001041c001d0001082400250001042c002d0001063000310001083400350001043c003d000106`), music.PlaybackMode.LoopingInBackground)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f d d d d d f . . . . . 
    . . . . d d f d f d d . . . . . 
    . . . . d d d d d d d . . . . . 
    . . . . d d d d d d d . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . d 2 2 2 2 2 2 2 d . . . . 
    . . . d 2 7 1 1 2 2 2 d . . . . 
    . . . . . 7 7 1 2 2 . . . . . . 
    . . . . . 7 7 1 7 7 . . . . . . 
    . . . . . d d . d d . . . . . . 
    . . . . . 1 1 . 1 1 . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
scene.cameraFollowSprite(mySprite)
info.startCountdown(5)
