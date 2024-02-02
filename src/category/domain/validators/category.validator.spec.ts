import CategoryValidatorFactory, { CategoryRules, CategoryValidator } from "./category.validator"


describe("CategoryValidator Tests",()=>{
    let validator : CategoryValidator

    beforeEach(()=>(validator=CategoryValidatorFactory.create()))

    test("Invalidation cases for name field",()=>{

        let isValid= validator.validate(null)

        expect(isValid).toBeFalsy()
        expect(validator.errors['name']).toStrictEqual([
            'name should not be empty',
            'name must be a string',
            'name must be shorter than or equal to 255 characters'
          ])

        isValid= validator.validate({name:""})

          expect(isValid).toBeFalsy()
          expect(validator.errors['name']).toStrictEqual([
              'name should not be empty',
            ])
        isValid= validator.validate({name:5 as any})

        expect(isValid).toBeFalsy()
        expect(validator.errors['name']).toStrictEqual([
            'name must be a string',
            'name must be shorter than or equal to 255 characters'
        ])

        isValid= validator.validate({name:"t".repeat(256)})

        expect(isValid).toBeFalsy()
        expect(validator.errors['name']).toStrictEqual([
            'name must be shorter than or equal to 255 characters'
        ])
    })

    test("Valid cases for field",()=>{

        const arrange:{
            name: string;
            description?: string;
            is_active?: boolean;
        } [] = [
            {name:"Some value"},
            {name:"Some Value",description:undefined},
            {name:"Some Value",description:null},
            {name:"Some Value",is_active:true},
            {name:"Some Value",is_active:false}
        ]

        arrange.forEach(item => {
            const isValid=validator.validate(item)
            expect(isValid).toBeTruthy()
            expect(validator.validatedData).toStrictEqual(new CategoryRules(item))
            
        });

    


    })


})