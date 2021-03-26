"use strict";
var randompoem;
(function (randompoem) {
    let subjects = ["Er", "Sie", "Paul", "Tom", "Ann", "Mia", "Jo", "Dan"];
    let verbs = ["hat", "ist", "liegt", "fragt", "macht", "zeigt", "tanzt", "stellt"];
    let objects = ["Sagen", "Fragen", "Magen", "Lagen", "Tagen", "Schlagen", "Kragen", "Plagen"];
    let poemparagraph = document.getElementById("poem");
    for (let index = 4; index > 0; index--) {
        let subjectposition = Math.floor(Math.random() * subjects.length);
        let subject = subjects.splice(subjectposition, 1);
        //console.log(subject);
        let verbposition = Math.floor(Math.random() * verbs.length);
        let verb = verbs.splice(verbposition, 1);
        //console.log(verb);
        let objectposition = Math.floor(Math.random() * objects.length);
        let object = objects.splice(objectposition, 1);
        //console.log(object);s
        let poem = getVerse(subject, verb, object, index);
        console.log(poem);
        poemparagraph.innerHTML += "" + poem + "<br>";
    }
    function getVerse(_subject, _verb, _object, _index) {
        let subject = _subject.join();
        let verb = _verb.join();
        let object = _object.join();
        let verse = subject + " " + verb + " " + object;
        if (_index > 1) {
            verse += ",";
            return verse;
        }
        else {
            verse += ".";
            return verse;
        }
    }
})(randompoem || (randompoem = {})); //namespace
//# sourceMappingURL=main.js.map