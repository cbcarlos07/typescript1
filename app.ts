import { Spacecraft, ContainerShip } from "./base-ships";
import { MilleniumFalcon } from "./starfighters";
import * as _ from 'lodash'
let ship = new Spacecraft('hyperdrive')
console.log( _.pad("Typescript Examples", 40, "=") )
ship.jumpIntoHyperspace()

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace()


let goodForTheJob = ( ship: ContainerShip ) => ship.cargoContainers > 2
console.log(  `Is falcon good for the job? ${goodForTheJob( falcon ) ? 'YES' : 'NO' }` )

/*let message: string = "Helpe me, Obi-Wan Kenobi. You're my only hope!"
console.log( message )
let episode: number = 4
console.log( 'This is episose '+episode )
episode = episode + 1
console.log('Next episode is '+episode)

let favoriteDroid
favoriteDroid ='BB-8'
console.log('My favorite droid is '+favoriteDroid)

let isEnoughToBeatMF = function (parsecs: number): boolean {
    return parsecs < 12
}

let distance = 11
console.log( `Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'YES': 'NO'}` )

let call = (name: string) => console.log(`Do you copy, ${name}`)
call('R2')

function inc(speed: number, inc: number = 1): number {
    return speed + inc
}

console.log(`inc(5,1) = ${inc(5,1)}`)
console.log(`inc(5) = ${inc(5)}`)*/




