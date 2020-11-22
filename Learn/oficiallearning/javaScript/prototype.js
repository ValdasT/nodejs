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
  

class Wolf {
    constructor (name) {
        this.name = name +' the dog'
    }
    howl () { console.log(this.name + ': awoooooooo') }
  }
  
  class Dog extends Wolf {
    constructor(name) {
        super(name = name)
    }
    woof () { console.log(this.name + ': woof') }
  }

  class Cat extends Dog {
    constructor(name) {
        super(name = name)
      }
    miau () { console.log(this.name + ': miauuu') }
  }
  
  const rufus = new Cat('Rufus')
  
rufus.woof() // prints "Rufus the dog: woof"
rufus.howl() // prints "Rufus the dog: awoooooooo"
rufus.miau() // prints "Rufus the dog: miauuu"
  