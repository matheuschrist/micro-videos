import InvalidUuidError from "../../@seedwork/erros/invalid-uuid.error"
import UniqueEntityId from "./unique-entities-id.vo"
import { validate as uuidValidate} from 'uuid';

function SpyValidateMethod(){
    return jest.spyOn(UniqueEntityId.prototype as any,'validate')
    
}

describe("UniqueEntityId Unit Tests",() =>{

    it('should throw error when uuid is invalid',()=>{
        const validateSpy=SpyValidateMethod()
        expect(()=>new UniqueEntityId('fake id')).toThrow(new InvalidUuidError())
        expect(validateSpy).toHaveBeenCalled()
    })

    it('should accept uuid passed in constructor',()=>{
        const validateSpy=SpyValidateMethod()
        const uuid='09c98886-341f-4c7e-8ccb-7056c007d444'
        const vo= new UniqueEntityId(uuid)

        expect(vo.id).toBe(uuid);

        expect(validateSpy).toHaveBeenCalled()


    })

    it('should accept uuid passed in constructor',()=>{
        const validateSpy=SpyValidateMethod()
        
        
        
        const vo= new UniqueEntityId()
        
        expect(uuidValidate(vo.id)).toBeTruthy()

        expect(validateSpy).toHaveBeenCalled()


    })
})