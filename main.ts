scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
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
info.startCountdown(10)
