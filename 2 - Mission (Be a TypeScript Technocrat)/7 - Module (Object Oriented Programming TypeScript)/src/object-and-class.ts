
class Animal{
    // private name: string; 
    // private sound: string; 
    // private species: string; 

    constructor(public name: string, public sound: string,public species: string){
        this.name = name
        this.sound = sound
        this.species = species
    }

    makeSound(): string{
        return `${this.name} make sound ${this.sound}`
    }

    getProperties(): object{
        return [this.name,this.sound, this.species]
    }
}

const animal1 = new Animal('Dog', 'Gheu Gheu','b')
console.log(animal1.makeSound());
console.log(animal1.getProperties());