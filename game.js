kaboom({
    global : true,
    fullscreen: true,
    scale : 1,
    clearColor : [0,0,0,1]
})


loadSprite('coin', 'sprites/coin.png')
loadSprite('enemy', 'sprites/enemy1.png')
loadSprite('brick', 'sprites/red-wall.png')
loadSprite('block', 'sprites/air-floor.png')
loadSprite('mario', 'sprites/player.png')
loadSprite('unboxed', 'sprites/red-floor.png')
loadSprite('mushroom', 'sprites/mushroom.png')
loadSprite('green-pipe', 'sprites/green-pipe.png')
loadSprite('surprise-block', 'sprites/question-mark-block.png')
loadSprite('pipe-top-left', 'sprites/green2.png')
loadSprite('pipe-top-right', 'sprites/green3.png')
loadSprite('pipe-bottom-left', 'sprites/green4.png')
loadSprite('pipe-bottom-right', 'sprites/green1.png')





scene("game", () => {
    layers(['bg', 'obj'], 'obj');

    const map = [
        '                                   ',
        '                                   ',
        '                                   ',
        '                                   ',
        '                                   ',
        '                 $$$$              ',
        '       =#==*     ====              ',
        '                           {}      ',
        '                 -     -   []  -   ',
        '==================================='
    ]

    const levelCfg = {
        width : 20,
        height : 20,
        '=': [sprite('brick'), solid()],
        '$': [sprite('coin')],
        '#': [sprite('surprise-block'), solid(), 'coin-surprise'],
        '*': [sprite('surprise-block'), solid(), 'mushroom-surprise'],
        '}': [sprite('pipe-top-right'), solid(), scale(0.5)],
        '{': [sprite('pipe-top-left'), solid(), scale(0.5)],
        '[': [sprite('pipe-bottom-right'), solid(), scale(0.5)],
        ']': [sprite('pipe-bottom-left'), solid(), scale(0.5)],
        '@': [sprite('mushroom')],
        'x': [sprite('unboxed'), solid()],
        'b': [sprite('block'), solid()],
        'U': [sprite('green-pipe')],
        '-': [sprite('enemy'), solid()]
    }

    const gameLevel = addLevel(map, levelCfg)

    const player = add([
        sprite('mario'), solid(),
        pos(30,0),
        body(),
        origin('bot')
    ])
})


start("game");