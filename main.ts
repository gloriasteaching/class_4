controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 20, 20)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 1 1 1 1 1 2 2 1 1 1 1 1 2 2 
    2 2 1 1 1 1 1 2 2 1 1 1 1 1 2 2 
    2 2 f f f 1 1 2 2 f f f 1 1 2 2 
    2 2 f f f 1 1 2 2 f f f 1 1 2 2 
    2 2 f f f 1 1 2 2 f f f 1 1 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 e e e 2 2 2 2 2 2 2 2 
    2 2 2 2 2 e e e 2 2 2 2 2 2 2 2 
    2 2 2 2 2 e e e 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
