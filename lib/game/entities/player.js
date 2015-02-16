ig.module( 'game.entities.player' )
.requires(
    'plusplus.abstractities.player',
    'plusplus.core.config'
)
.defines(function () {
    ig.EntityPlayer = ig.global.EntityPlayer = ig.Player.extend({
       
        name:'player',
        temporaryInvulnerabilityAlpha: 1,

        animSheet: new ig.AnimationSheet( "media/player.png", 64, 64),
        
        animInit: "idleX",
        
        animSettings: {
            idleX: { sequence: [6], frameTime: 1 },
            // idleLeft: { sequence: [10], frameTime: 0.1 },
            idleDown : {
				frameTime: 1,
				sequence: [0]
			},
			idleUp: {
                frameTime: 1,
                sequence: [3]
            },
            moveX: {
				frameTime: 0.10,
				sequence: [7,9]
			},
			// moveLeft: {
			// 	frameTime: 0.10,
			// 	sequence: [11,12,13]
			// },
			moveDown: {
                frameTime: 0.1,
                sequence: [1,2]
            },
            moveUp: {
                frameTime: 0.1,
                sequence: [4,5]
            },
        },
        collides: ig.Entity.COLLIDES.ACTIVE,
        size: {
            x: 32,
            y: 32
        },
        
        offset: {
            x: 0,
            y:0
        },

    });
});