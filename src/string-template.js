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

