//Governor Class (static)
class Governor {
    static govName = this.govName
    static age = this.age
    static yearsInOffice = this.yearsInOffice
    static hairColor = this.hairColor
    static ownsPet = this.ownsPet

    static lie() {
        console.log('If you vote for me, I promise to end poverty and clean up our streets!')
    }
    static makeSpeech() {
        console.log('My fellow citizens, I am your leader.')
    }
    static travel() {
        console.log('The Governor has traveled!')
    }
}


//testing methods for Governor
Governor.lie()
Governor.makeSpeech()
Governor.travel()

// Person class
class Person {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    greet() {
        console.log('Hello, how are you?');
    }

    eat() {
        console.log('This food is yummy!');
    }

    sleep() {
        console.log('Shhhh!!! I\'m sleeping!');
    }
}

// PostalWorker Class

class PostalWorker extends Person {
    driveMailTruck() {
        console.log(`${this.name} is driving mail truck.`)
    }
    isTiredAF() {
        console.log(`${this.name} is tired. They get don\'t paid enough for this!`)
    }
    organizeMail() {
        console.log(`${this.name} is organizing the mail.`)
    }
}
const postalWorker1 = new PostalWorker('John Letterman', 35, 'male')
const postalWorker2 = new PostalWorker('River Lee', 44, 'prefer not to answer')

console.log(postalWorker1)

//testing the methods for postalWorker1
postalWorker1.driveMailTruck()
postalWorker1.isTiredAF()
postalWorker1.organizeMail()

console.log(postalWorker2)

//testing the methods for postalWorker2
postalWorker2.driveMailTruck()
postalWorker2.isTiredAF()
postalWorker2.organizeMail()

class Chef extends Person { //extends means it inherits person class
    tasteTest() {
        console.log(`${this.name} is tasting the food...yum!`)
    }
    cook() {
        console.log(`${this.name} is cooking!`)
    }
    cleanUp() {
        console.log(`${this.name} is cleaning up the messy kitchen...`)
    }
}

const chef1 = new Chef('Fo Sizzle', 32, 'male')
const chef2 = new Chef('Lisa Cook', 44, 'female')

console.log(chef1)

//testing methods for chef1
chef1.tasteTest()
chef1.cook()
chef1.cleanUp()

console.log(chef2)

//testing methods for chef2
chef2.tasteTest()
chef2.cook()
chef2.cleanUp()

// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods