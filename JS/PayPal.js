import Payment from Payment.js

class PayPal extends Payment {
    constructor(id, cost, email) {
        super(id, cost) 
        this.email = email
    }
}

export default PayPal