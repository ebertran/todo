const fs = require('fs')

class TodoService {
    constructor() {
        this.file = require('path').join(__dirname, 'users.json')

        this.users = JSON.parse(fs.readFileSync(this.file))
    }

    save() {
        fs.writeFileSync(this.file, JSON.stringify(this.users, null, 4))
    }