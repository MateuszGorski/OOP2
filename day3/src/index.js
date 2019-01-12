// console.warn('hello world');

// class Animal{
//     constructor(sound){
//         this.sound = sound
//     }
// }
// console.log(Animal)

// var cat1 = new Animal ("miał");

// function Animal (){
//     this.sound = sound;
// }

// var cat1 = new Animal('miał');


// class Dog {
//     constructor (){
//         this.name = "reksio"
//     }
//     walk(){
//         console.log(this.name)
//     }
// }

class Dog extends Animal {
    constructor(){
        super('miał');
        this.sound = "reksio"
    }

    sayName(){
        console.log(this.name);
    }
}

var dog1 = new Dog();