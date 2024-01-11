import { deepFreeze } from "./object"

describe("Object Unit Tests", () => {

    it("Should not freeze a scalar value",()=>{
        const str =  deepFreeze('string');
        expect(typeof str).toBe('string');

        let boolean =  deepFreeze(true);
        expect(typeof boolean).toBe("boolean");

        boolean =  deepFreeze(false);
        expect(typeof boolean).toBe('boolean');

        const num =  deepFreeze(5);
        expect(typeof num).toBe('number');
    })

    it("Should be a immutable obj",()=>{
        
        const obj =  deepFreeze({prop1:'value1',deep:{prop2:'value2',prop3: new Date()}});

        expect(()=>{(obj as any).prop1 = 'aaaaa';}).toThrow("Cannot assign to read only property 'prop1' of object '#<Object>'")
        

        expect(()=>{(obj as any).deep.prop2 = 'aaaaa';}).toThrow("Cannot assign to read only property 'prop2' of object '#<Object>'")


        expect(obj.deep.prop3).toBeInstanceOf(Date)
        //expect(typeof str).toBe('string');


        
    })

})