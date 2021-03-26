namespace randompoem {
    let subjects: string[] = ["Er", "Sie", "Paul", "Tom", "Ann", "Mia", "Jo", "Dan"];
    let verbs: string[] = ["hat", "ist", "liegt", "fragt", "macht", "zeigt", "tanzt", "stellt"];
    let objects: string[] = ["Sagen", "Fragen", "Magen", "Lagen", "Tagen", "Schlagen", "Kragen", "Plagen"];
    let poemparagraph: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("poem");

    for (let index: number = 4; index > 0; index--) {
        let subjectposition: number = Math.floor(Math.random() * subjects.length);
        let subject: string[] = subjects.splice(subjectposition, 1);
        //console.log(subject);
        let verbposition: number = Math.floor(Math.random() * verbs.length);
        let verb: string[] = verbs.splice(verbposition, 1);
        //console.log(verb);
        let objectposition: number = Math.floor(Math.random() * objects.length);
        let object: string[] = objects.splice(objectposition, 1);
        //console.log(object);s
        let poem: string = getVerse (subject, verb, object, index);
        
        console.log(poem);
        poemparagraph.innerHTML += "" + poem + "<br>";
    }

    function getVerse(_subject: string[], _verb: string[], _object: string[], _index: number): string {
        let subject: string = _subject.join();
        let verb: string = _verb.join();
        let object: string = _object.join();
        let verse: string = subject + " " + verb + " " + object;
        if (_index > 1) {
            verse += ",";          
            return verse;       
        } else {
            verse += ".";
            return verse;
        }      
    }
} //namespace