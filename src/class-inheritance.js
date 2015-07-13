var Developer = (function() {

    'use strict';

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

    return Developer;

})();

logSeparator('Class Inheritance');

var John = new Developer('John', '28');

console.log(John.getSkills());

John.setSkills(['JavaScript', 'CSS', 'HTML']);

console.log(John.getSkills());
