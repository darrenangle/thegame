ig.module(
    'plusplus.config-user'
)
    .defines(function() {

        /**
         * User configuration of Impact++.
         * <span class="alert alert-info"><strong>Tip:</strong> it is recommended to modify this configuration file!</span>
         * @example
         * // in order to add your own custom configuration to Impact++
         * // edit the file defining ig.CONFIG_USER, 'plusplus/config-user.js'
         * // ig.CONFIG_USER is never modified by Impact++ (it is strictly for your use)
         * // ig.CONFIG_USER is automatically merged over Impact++'s config
         * @static
         * @readonly
         * @memberof ig
         * @namespace ig.CONFIG_USER
         * @author Collin Hover - collinhover.com
         **/
        ig.CONFIG_USER = {
            // make the game fullscreen!
            TOP_DOWN: true,
            GAME_WIDTH_PCT: 1,
            GAME_HEIGHT_PCT: 1,
            // dynamic scaling based on dimensions in view (resolution independence)
            GAME_WIDTH_VIEW: 700,
            GAME_HEIGHT_VIEW: 541,
            CAMERA: {
                AUTO_FOLLOW_PLAYER : false
            },
            // CHARACTER: {
            //     MAX_VEL_GROUNDED_Y: 30,
            //     MAX_VEL_GROUNDED_X: 30
            // }
            CHARACTER: {
                PATHFINDING_UPDATE_DELAY: 4
            }
        };


    });
