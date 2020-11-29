// const wolf = {
//     howl: function () { console.log(this.name + ': awoooooooo') }
//   }

//   const dog = Object.create(wolf, {
//     woof: { value: function() { console.log(this.name + ': woof') } }
//   })

//   const rufus = Object.create(dog, {
//     name: {value: 'Rufus the dog'}
//   })

//   rufus.woof() // prints "Rufus the dog: woof"
// rufus.howl() // prints "Rufus the dog: awoooooooo"

//================================================
// class Wolf {
//     constructor (name) {
//         this.name = name +' the dog'
//     }
//     howl () { console.log(this.name + ': awoooooooo') }
//   }

//   class Dog extends Wolf {
//     constructor(name) {
//         super(name = name)
//     }
//     woof () { console.log(this.name + ': woof') }
//   }

//   class Cat extends Dog {
//     constructor(name) {
//         super(name = name)
//       }
//     miau () { console.log(this.name + ': miauuu') }
//   }

//   const rufus = new Cat('Rufus')

// rufus.woof() // prints "Rufus the dog: woof"
// rufus.howl() // prints "Rufus the dog: awoooooooo"
// rufus.miau() // prints "Rufus the dog: miauuu"

//================================================
// class car1 {
//   howl() { console.log('awoooooooo') }
//   drive() { console.log('goo') }
// }

// class car2 extends car1 {
//   woof() { console.log('woof') }
//   left() { console.log('left') }
// }

// class car3 extends car2 {
//   miau() { console.log('miauuu') }
//   right() { console.log('right') }
// }

// const rufus = new car3()

// rufus.woof() // prints "Rufus the dog: woof"
// rufus.howl() // prints "Rufus the dog: awoooooooo"
// rufus.miau() // prints "Rufus the dog: miauuu"
// rufus.right() 
// rufus.left() 
// rufus.drive() 

//================================================
const car1 = {
  howl: function () { console.log('awoooooooo') },
  drive: function () { console.log('gooooo') }
  }

  const car2 = Object.create(car1, {
    woof: { value: function () { console.log(': woof') } },
    left: { value: function() { console.log(': left') } }
  })

  const car3 = Object.create(car2, {
    brake: { value: function () { console.log(': brake') } },
    right: { value: function() { console.log(': right') } }
  })

  const rufus = Object.create(car3)

  rufus.woof() // prints "Rufus the dog: woof"
rufus.howl() // prints "Rufus the dog: awoooooooo"
rufus.right() 
rufus.left() 
rufus.drive() 