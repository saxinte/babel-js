(function() {

    'use strict';

    logSeparator('Arrow function');

    var fruits = ['banana', 'lemon', 'mango', 'kiwi'];

    fruits.forEach(fruit => {
        console.log(fruit);
    });

})();

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

    var buttons = document.querySelectorAll('#assignment button'),
        clickedButton = document.getElementById('clickedButton');

    for(var i = 0, l = buttons.length; i<l; i++){
        let index = i;
        buttons[i].addEventListener('click', function() {
            clickedButton.innerHTML = buttons[index].innerHTML;
        });
    }

})();


(function() {

    'use strict';

    logSeparator('Class Inheritance');

    class Human {

        constructor(name, age){
            this.name = name;
            this.age = age;
        }

    }

    class Developer extends Human {

        constructor(name, age) {
            super(name, age);
            this.skills = [];
        }

        getSkills() {
            var skills = this.skills.length ? this.skills.toString() : 'none';
            return `${this.name} skills: ${this.skills}`;
        }

        setSkills(skills){
            skills.forEach(skill => {
                this.skills.push(skill);
            });
        }

    }

    var John = new Developer('John', '28');
    console.log(John.getSkills());

    John.setSkills(['JavaScript', 'CSS', 'HTML']);
    console.log(John.getSkills());

})();

(function() {

    'use strict';

    logSeparator('String Template');

    var sports = ['Football', 'Hockey', 'Tennis', 'Rugby'];
    var persons = ['Alex', 'Sarah', 'John', 'Andrew'];

    persons.forEach( person => {
        let randomSport = sports[Math.floor(Math.random()*sports.length)];
        console.log(`${person} is playing ${randomSport}`);
    });

})();


function logSeparator(msg) {
    console.log('------------------ '+msg+' ------------------');
}