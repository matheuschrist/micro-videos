import ValueObject from "../value-object";


class StubValueObject extends ValueObject{


}

describe("ValueObject Units Testes",()=>{


    it("Should test value",()=>{
        let  vo = new StubValueObject("String value");
        expect(vo.value).toBe("String value");



        vo = new StubValueObject({prop1:"value1"});
        expect(vo.value).toStrictEqual({prop1:"value1"});

        
    })

    it("Should Convert to a string",()=>{
        const date= new Date();
        let arrange =[
          // { received : null, expected:"null"},
        //{ received : undefined, expected:"undefined"},
           { received : "", expected:""},
           { received : "fake test", expected:"fake test"},
           { received : 0, expected:"0"},
           { received : 1, expected:"1"},
           { received : 5, expected:"5"},
           { received : true, expected:"true"},
           { received : false, expected:"false"},
           { received : date, expected:date.toString()},
           { received : {prop1:"value1"}, expected:JSON.stringify({prop1:"value1"})}
            
        ];


        arrange.forEach( value => {

        const  vo = new StubValueObject(value.received);
        expect(vo.toString()).toBe(value.expected);
        })

        

        
    })

    it("Should be a immutable obj",()=>{
        
        const obj =  {prop1:'value1',deep:{prop2:'value2',prop3: new Date()}};
        const vo = new StubValueObject(obj)

        expect(()=>{(vo as any).value.prop1 = 'test';}).toThrow("Cannot assign to read only property 'prop1' of object '#<Object>'")
        

        expect(()=>{(vo as any).value.deep.prop2 = 'test';}).toThrow("Cannot assign to read only property 'prop2' of object '#<Object>'")


        expect(vo.value.deep.prop3).toBeInstanceOf(Date)
        //expect(typeof str).toBe('string');


        
    })

})