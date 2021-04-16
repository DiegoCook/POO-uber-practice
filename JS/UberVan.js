import Car from Car.js

class UberVan extends Car {
    constructor(id, license, driver, passengers, typeCarAccepted, seatsMaterial) {
        super(id, license, driver, passengers)
        this.typeCarAccepted = typeCarAccepted
        this.seatsMaterial = seatsMaterial
    }
}

export default UberVan