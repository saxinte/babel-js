function logSeparator(msg) {
    console.log('------------------ '+msg+' ------------------');
}
/*
 *  Arrow function
 */
logSeparator('Arrow function');
(function() {

    'use strict';

    var fruits = ['banana', 'lemon', 'mango', 'kiwi'];

    fruits.forEach(fruit => {
        console.log(fruit);
    });

})();



logSeparator('let assignment');
(function() {

    'use strict';

    var developer = 'Alex';
    if(developer){
        let age = 25;
    }

    try{
        console.warn(age);
    }catch(e){
        console.log(e);
    }

})();

