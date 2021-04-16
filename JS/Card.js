import Payment from Payment.js

class Card extends Payment {
    constructor(id, cost, number, cvv, date) {
        super(id, cost)
        this.number = number
        this.cvv = cvv
        this.date = date
    }
}

export default Card