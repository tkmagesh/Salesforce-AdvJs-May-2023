
/* 
var spinner = {
    counter : 0,
    up : function(){
        return ++this.counter;
    },
    down: function(){
        return --this.counter
    }
} 
*/

var spinner = (function(){
    var counter = 0;

    function up(){
        return ++counter;
    }

    function down(){
        return --counter;
    }

    return {
        up : up,
        down : down
    }
})()


// the spinner object must have the following methods
/* 
    spinner.up() //=> 1
    spinner.up() //=> 2
    spinner.up() //=> 3
    
    spinner.down() //=> 2
    spinner.down() //=> 1
    spinner.down() //=> 0
    spinner.down() //=> -1

    NOTE:
        NO HTML, NO BUTTON, NO EVENT HANDLERS

        there should NOT BE any way by which the outcome of up() and down() methods can be influenced from outside
        For ex:
            The following SHOULD NOT BE possible
                count = 10000
                spinner.up() //=> 10001

                OR

                spinner.count = 10000
                spinner.up() //=> 10001
*/