kaboom({
    background: [150, 200, 255]
})

scene("title", () => {
    add([
        text("ROLLING RAILGUNS"),
        pos(300, 150),
    ])
    add([
        text("press (X) to play"),
        pos(350, 300),
        scale(0.8),
    ])
    onKeyPress("x", () => {
        go("game")
    })
})

scene("game", () => {
    onKeyPress("escape", () => {
        go("title")
    })
    add([
        text("test"),
    ])
})

go("title")