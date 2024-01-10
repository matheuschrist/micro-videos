

export default class InvalidUuidError extends Error {

    constructor(message?:string){
        super('ID must be a valid UUID')
        this.name= 'InvalidUuidError'
    }

}