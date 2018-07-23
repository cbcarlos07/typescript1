import {Spacecraft, ContainerShip} from "./base-ships";

export class MilleniumFalcon extends Spacecraft implements ContainerShip{

    cargoContainers: number

    constructor(){
        super('hyperdrive')
        this.cargoContainers = 1
    }

    jumpIntoHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperspace()
        }else{ console.log( 'Failed to jump into hyperspace' ) }
    }
}

