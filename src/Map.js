 var Map = cc.Node.extend({
    arr:[],
    player:[],
    bomb:[],
    block:[],
    fire:[],
        ctor: function() {
        this._super();
        this.WIDTH = 19;
        this.HEIGHT = 15;
        this.MAP = [
            '###################',
            '#--.............-p#',
            '#-#.#.#.#.#.#.#.#-#',
            '#.................#',
            '#.#.#.#.#.#.#.#.#.#',
            '#.................#',
            '#.#.#.#.#.#.#.#.#.#',
            '#.................#',
            '#.#.#.#.#.#.#.#.#.#',
            '#.................#',
            '#.#.#.#.#.#.#.#.#.#',
            '#.................#',
            '#-#.#.#.#.#.#.#.#-#',
            '#p-.............--#',
            '###################'
             ];
        for ( var r = 0; r < this.HEIGHT; r++ ) {
            for ( var c = 0; c < this.WIDTH; c++ ) {
                if ( this.MAP[ r ][ c ] == '#' ) {

                    var s = cc.Sprite.create( 'images/block2.png' );
                    s.setAnchorPoint( cc.p( 0, 0 ) );
                    s.setPosition( cc.p( 20 + (c * 40), (this.HEIGHT - r - 2) * 40 ) );
                    s.name = "block";
                    this.arr.push(s);
                    this.addChild( s );
                }
                if ( this.MAP[ r ][ c ] == '.' ) {

                    var block = new Block(this, 20 + (c * 40),(this.HEIGHT - r - 2) * 40);
                    this.addChild( block );
                    this.block.push(block);
                }
            }
        }

        
 
        // ...  code for drawing the maze has be left out
        
    },
    closeTo: function( posX,posY ) {
        var oPosX = posX;
        var oPosY = posY;
        for(var i = 0 ; i<this.arr.length;i++){
            if(( ( Math.abs( this.arr[i].getPosition().x - oPosX ) <= 20 ) && ( Math.abs( this.arr[i].getPosition().y - oPosY) <= 20 ) ) ){
                return true;
            }
        }
        return false;
    },
});