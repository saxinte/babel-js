'use strict';

function logSeparator(msg) {
    console.log('------------------ ' + msg + ' ------------------');
}
/*
 *  Arrow function
 */
logSeparator('Arrow function');
(function () {

    'use strict';

    var fruits = ['banana', 'lemon', 'mango', 'kiwi'];

    fruits.forEach(function (fruit) {
        console.log(fruit);
    });
})();

logSeparator('let assignment');
(function () {

    'use strict';

    var developer = 'Alex';
    if (developer) {
        var _age = 25;
    }

    try {
        console.warn(age);
    } catch (e) {
        console.log(e);
    }
})();
//# sourceMappingURL=es5.js.map
