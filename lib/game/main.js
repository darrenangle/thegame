ig.module( 
	'game.main' 
)
.requires(
	'plusplus.core.plusplus',
	 // player class
    'game.entities.player',
    // rooms
    'game.levels.bedroom',
    // command execution
    'game.components.command-execution'

)
.defines(function(){
var _c = ig.CONFIG;

var myGameClass = ig.GameExtended.extend({ /* game settings go here */
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	currentLevel: null,
	
	init: function() {
		// Initialize your game here; bind keys etc.
		this.parent();

		this.loadLevelDeferred( 'bedroom', 'spawner-a' );

		// this.setCursorLayer();
	},
	
	inputStart: function () {

            // Leftclick
            ig.input.bind(ig.KEY.MOUSE1, 'click');

    },

	loadLevelDeferred: function( level, playerSpawnerName ){

            this.currentLevel = level;

            this.parent( level, playerSpawnerName );

     },


     setCursorLayer: function(){

            this.addLayer( new ig.Layer('cursor', {
                zIndex: _c.Z_INDEX_ABOVE_ALL
            }));

        },
    buildLevel: function(){

            this.parent();

            // reposition camera on level switch
            // this.centerStaticCamera();

            // Create room state
            // this.roomState.createState();

            // Create new command execution instance
            this.commandExecution = new ig.CommandExecution();
            

        },    
    centerStaticCamera : function(){

            // Reset screen position for
            // proper positioning on resize
            ig.game.screen.x = 0;
            ig.game.screen.y = 0;

            // Calculate new screen position
            ig.game.screen.x -= ( ig.system.realWidth / 2 ) / ig.system.scale - ( _c.GAME_WIDTH_VIEW / 2 );
            ig.game.screen.y -= ( ig.system.realHeight / 2 ) / ig.system.scale - ( _c.GAME_HEIGHT_VIEW / 2 );

        },

	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		ig.game.commandExecution.execute();
		// Add your own, additional update code here
	},
	



	// draw: function() {
	// 	// Draw all entities and backgroundMaps
	// 	this.parent();
		
	// 	// Add your own drawing code here
	// 	var x = ig.system.width/2,
	// 		y = ig.system.height/2;
		
	// 	this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	// }
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', myGameClass, 60, _c.GAME_WIDTH,
		_c.GAME_HEIGHT,
		_c.SCALE);

});
