import Car from Car.js

class UberBlack extends Car {
    constructor(id, license, driver, passangers, typeCarAccepted, seatsMaterial) {
        super(id, license, driver, passangers)
        this.typeCarAccepted = typeCarAccepted
        this.seatsMaterial = seatsMaterial
    }
}

export default UberBlack