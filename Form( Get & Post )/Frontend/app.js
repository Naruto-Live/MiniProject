// // Factory function
// function personMaker( name , age ) {
//     const person = {
//         name : name,
//         age : age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         }
//     };
//     return person;
// }

// let p1 = personMaker("John" , 30);  //copy --> takes space in memory
// let p2 = personMaker("larka" , 26); //copy --> takes space in memory




// // **
// // Constructors - doesn't return anything & start with capital letter
// function person( name , age ) {
//     this.name = name;
//     this.age = age;
// }

// person.prototype.talk = function() {
//     console.log(`Hi, my name is ${this.name}`);
// }

// let p1 = new person("John" , 30);  // instance of person
// let p2 = new person("larka" , 26); // instance of person


class person {
    constructor( name , age ) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, my name is ${this.name}.`);
    }
}




 class student extends person {
     constructor( name , age , marks ) {
        console.log("1");
        super( name , age ); // parent class constructor is being called
        console.log("2");
        this.marks = marks;
        console.log("3");
        console.log(`I am ${this.name} , a student with marks ${this.marks}`);
    }

 }



  class teacher extends person {
    constructor( name , age , subject ) {
        super( name , age ); // parent class constructor is being called
        console.log("Teacher class constructor called");
        this.subject = subject;
        console.log(`I am ${this.name} , a teacher of ${this.subject}`);
    }

 }
 






















let arr = [ 1 , 2 , 3 ];
arr.sayHello = () => {
    console.log("Hello! , i am arr");
};




// arr.__proto__ is reference from the prototype of arr where Array.prototype & String.prototype are originally defined.

// // changing push from prototype default behavior to my own function
// arr.__proto__.push = (n) => {console.log("Pushing number : ", n);}




















