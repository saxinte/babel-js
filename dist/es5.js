'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {

    'use strict';

    logSeparator('Arrow function');

    var fruits = ['banana', 'lemon', 'mango', 'kiwi'];

    fruits.forEach(function (fruit) {
        console.log(fruit);
    });
})();

(function () {

    'use strict';

    logSeparator('Assignment');

    var developer = 'Alex';
    if (developer) {
        var _age = 25;
    }

    try {
        console.warn(age);
    } catch (e) {
        console.log(e);
    }

    var buttons = document.querySelectorAll('#assignment button');

    var _loop = function () {
        var index = i;
        buttons[i].addEventListener('click', function () {
            document.getElementById('index').innerHTML = buttons[index].innerHTML;
        });
    };

    for (var i = 0, l = buttons.length; i < l; i++) {
        _loop();
    }
})();

var Developer = (function () {

    'use strict';

    var Human = function Human(name, age) {
        _classCallCheck(this, Human);

        this.name = name;
        this.age = age;
    };

    var Developer = (function (_Human) {
        _inherits(Developer, _Human);

        function Developer(name, age) {
            _classCallCheck(this, Developer);

            _get(Object.getPrototypeOf(Developer.prototype), 'constructor', this).call(this, name, age);
            this.skills = [];
        }

        _createClass(Developer, [{
            key: 'getSkills',
            value: function getSkills() {
                var skills = this.skills.length ? this.skills.toString() : 'none';
                return this.name + ' skills: ' + this.skills;
            }
        }, {
            key: 'setSkills',
            value: function setSkills(skills) {
                var _this = this;

                skills.forEach(function (skill) {
                    _this.skills.push(skill);
                });
            }
        }]);

        return Developer;
    })(Human);

    return Developer;
})();

logSeparator('Classes');

var John = new Developer('John', '28');

console.log(John.getSkills());

John.setSkills(['JavaScript', 'CSS', 'HTML']);

console.log(John.getSkills());

(function () {

    'use strict';

    logSeparator('Templating');

    var sports = ['Football', 'Hockey', 'Tennis', 'Rugby'];
    var persons = ['Alex', 'Sarah', 'John', 'Andrew'];

    persons.forEach(function (person) {
        var randomSport = sports[Math.floor(Math.random() * sports.length)];
        console.log(person + ' is playing ' + randomSport);
    });
})();

function logSeparator(msg) {
    console.log('------------------ ' + msg + ' ------------------');
}
//# sourceMappingURL=es5.js.map
