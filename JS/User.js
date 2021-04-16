import Account from Account.js

class User extends Account {
    constructor(id, name, document, email, password) {
        super(id, name, document, email, password)
    }
}

export default User