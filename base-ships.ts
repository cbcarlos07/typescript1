class Spacecraft {

    constructor (public propulsor: string){}

    jumpIntoHyperspace(){
        console.log( `Entering hiperspace with ${this.propulsor}`  )
    }
}

 interface ContainerShip {

    cargoContainers: number
}

export { Spacecraft, ContainerShip }
