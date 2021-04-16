import Car from Car.js

class UberPool extends Car {
    constructor(id, license, driver, passengers, brand, model) {
        super(id, license, driver, passengers)
        this.brand = brand
        this.model = model
    }
}

export default UberPool