import ValidationError from "../erros/validation-error";
import ValidatorRules from "./validator-rules"

type Values = {
    value:any,
    property:string,
}
type ExpectRule={
    value:any,
    property:string,
    rule : keyof ValidatorRules ,
    error : ValidationError,
    params?: any[]

}

function assertIsInvalid({value ,property ,rule,error,params=[]}:ExpectRule){

    expect(()=>{
    const validator =ValidatorRules.values(value,property);
    const method=validator[rule];
    method.apply(validator,params)
    }).toThrow(error);

}

function assertIsValid({value ,property ,rule,error,params=[]}:ExpectRule){

    expect(()=>{
    const validator =ValidatorRules.values(value,property);
    const method=validator[rule];
    method.apply(validator,params)
    }).not.toThrow(error);

}

describe('ValidatorRules Unit Tests',()=>{


    test('Values method',()=>{

        const validator= ValidatorRules.values('some value','field');
        expect(validator).toBeInstanceOf(ValidatorRules)
        expect(validator['value']).toBe('some value')
        expect(validator['property']).toBe('field')

    })

    test('Required validation rule',()=>{
        const error=new ValidationError("The field is required");
        let arrange :Values[]=[
            { value: null  ,property:"field" },
            { value: undefined  ,property:"field" },
            { value: ""  ,property:"field" }
        ]

        arrange.forEach(item =>{
            assertIsInvalid({value:item.value , property:item.property,rule:"required",error:error})

        })

         arrange=[
            { value: "teste" ,property:"field" },
            { value: 5  ,property:"field" },
            { value: 0  ,property:"field" },
            { value: false  ,property:"field" }
        ]

        arrange.forEach(item =>{
            assertIsValid({value:item.value , property:item.property,rule:"required",error:error})

        })
       
        
    })

    test('string validation rule',()=>{
        const error=new ValidationError("The field must be a string");
        let arrange :Values[]=[
            { value: 5  ,property:"field" },
            { value: {}  ,property:"field" },
            { value: false  ,property:"field" }
        ]

        arrange.forEach(item =>{
            assertIsInvalid({value:item.value , property:item.property,rule:"string",error:error})

        })

         arrange=[
            { value: "teste" ,property:"field" },
            { value: null,property:"field" },
            { value: undefined ,property:"field" },
        ]

        arrange.forEach(item =>{
            assertIsValid({value:item.value , property:item.property,rule:"string",error:error})

        })
       

    });

    test('maxLength validation rule',()=>{
        const error=new ValidationError("The field must be less or equal than 5 characters");

        let arrange :Values[]=[
            { value: "this is an error"  ,property:"field" },
    
        ]

        arrange.forEach(item =>{
            assertIsInvalid({value:item.value , property:item.property,rule:"maxLength",error:error,params:[5]})

        })

         arrange=[
            { value: "this is an error" ,property:"field" },
            { value: null,property:"field" },
            { value: undefined ,property:"field" },
        ]

        arrange.forEach(item =>{
            assertIsValid({value:item.value , property:item.property,rule:"string",error:error,params:[20]})

        })


    });

    test('boolean validation rule',()=>{
        const error=new ValidationError("The field must be a boolean");

        let arrange :Values[]=[
            { value: 5  ,property:"field" },
            { value: "true"  ,property:"field" },
            { value: "false"  ,property:"field" },
    
        ]

        arrange.forEach(item =>{
            assertIsInvalid({value:item.value , property:item.property,rule:"boolean",error:error})

        })

         arrange=[
            { value: false ,property:"field" },
            { value: true,property:"field" },
            
        ]

        arrange.forEach(item =>{
            assertIsValid({value:item.value , property:item.property,rule:"boolean",error:error})

        })


    });


    it("Should trwow validation error when combine two or more validation rules", ()=>{
    let validator=ValidatorRules.values(null, "field")
    expect(()=>{validator.required().string().maxLength(5)}).toThrow(new ValidationError("The field is required"))

    validator=ValidatorRules.values(5, "field")
    expect(()=>{validator.required().string().maxLength(5)}).toThrow(new ValidationError("The field must be a string"))

    validator=ValidatorRules.values("123456", "field")
    expect(()=>{validator.required().string().maxLength(5)}).toThrow(new ValidationError("The field must be less or equal than 5 characters"))


    validator=ValidatorRules.values(null, "field")
    expect(()=>{validator.required().boolean()}).toThrow(new ValidationError("The field is required"))
    
    validator=ValidatorRules.values(5, "field")
    expect(()=>{validator.required().boolean()}).toThrow(new ValidationError("The field must be a boolean"))
    })

    it("Should a valid when combine two or more validation rules", ()=>{

    expect.assertions(0)

    ValidatorRules.values("test", "field").required().string();
    ValidatorRules.values("123456", "field").required().string().maxLength(6);

    ValidatorRules.values(true, "field").required().boolean();
    ValidatorRules.values(true, "field").required().boolean();
    
    })
    
})