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

