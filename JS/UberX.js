import Car from Car.js

class UberX extends Car {
    constructor(id, license, driver, passengers, brand, model) {
        super(id, license, driver, passengers)
        this.brand = brand
        this.model = model
    }
}

export default UberX