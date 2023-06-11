export class ErrorHandle extends Error {
    constructor (message, status, ejs) {
        super()
        this.message = message,
        this.status = status
        this.ejs = ejs
    }
}