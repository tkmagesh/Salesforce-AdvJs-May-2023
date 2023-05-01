
var spinner = /* ...... */

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
        there should NOT BE any way by which the outcome of up() and down() methods can be influenced from outside
        For ex:
            The following SHOULD NOT BE possible
                count = 10000
                spinner.up() //=> 10001

                OR

                spinner.count = 10000
                spinner.up() //=> 10001
*/