scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    info.startCountdown(20)
    info.setScore(2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 8))
    tiles.setTilemap(tilemap`level0`)
    info.startCountdown(10)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    info.startCountdown(15)
    tiles.setCurrentTilemap(tilemap`level3`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    info.setScore(1)
    info.startCountdown(10)
})
let mySprite: Sprite = null
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
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
scene.cameraFollowSprite(mySprite)
info.startCountdown(5)
