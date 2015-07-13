(function() {

    'use strict';

    logSeparator('Assignment');

    var developer = 'Alex';
    if(developer){
        let age = 25;
    }

    try{
        console.warn(age);
    }catch(e){
        console.log(e);
    }

    var buttons = document.querySelectorAll('#assignment button');

    for(var i = 0, l = buttons.length; i<l; i++){
        let index = i;
        buttons[i].addEventListener('click', function() {
            document.getElementById('index').innerHTML = buttons[index].innerHTML;
        });
    }

})();

