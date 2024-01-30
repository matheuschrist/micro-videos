import { Category } from "./category";
import ValidationError from "../../../@seedwork/erros/validation-error";

describe("Category Integration Test", () => {

    describe('Created Method',()=>{
        it('Should a invalid Category using name field',()=>{ 

            expect(()=>{new Category({name:null})}).toThrow(new ValidationError("The name is required"))
    
            expect(()=>{new Category({name:''})}).toThrow(new ValidationError("The name is required"))
    
            expect(()=>{new Category({name:5 as any})}).toThrow(new ValidationError("The name must be a string"))
    
            expect(()=>{new Category({name:'t'.repeat(256)})}).toThrow(new ValidationError("The name must be less or equal than 255 characters"))
        })
    
        it('Should a invalid Category using description field',()=>{ 
            expect(()=>{new Category({name:"Movie",description:5 as any})}).toThrow(new ValidationError("The description must be a string"))
    
        })
    
        it('Should a invalid Category using is_active field',()=>{ 
            expect(()=>{new Category({name:"Movie",is_active:"string" as any})}).toThrow(new ValidationError("The is_active must be a boolean"))
    
        })

        test("Should a valid Category", () => {

            expect.assertions(0)
            new Category({name:"Movie"})
            new Category({name:"Movie",description:"Some description"})
            new Category({name:"Movie",description:null})
            new Category({name:"Movie",description:"Some description",is_active:false})
            new Category({name:"Movie",description:"Some description",is_active:true})
            
            
        
          });
    })

    describe('Updated Method',()=>{
        it('Should a invalid Category using name field',()=>{ 
            const category= new Category({name:"Movie"})
            expect(()=>{category.update(null,null)}).toThrow(new ValidationError("The name is required"))
    
            expect(()=>{category.update('',null)}).toThrow(new ValidationError("The name is required"))
    
            expect(()=>{category.update(5 as any,null)}).toThrow(new ValidationError("The name must be a string"))
    
            expect(()=>{category.update('t'.repeat(256) as any,null)}).toThrow(new ValidationError("The name must be less or equal than 255 characters"))

            
        })

        it("Should a valid Category", () => {

            expect.assertions(0)
            const category= new Category({name:"Movie"})
            category.update("name changed",null)
            category.update("name changed","Some description")
            
          })
    
        it('Should a invalid Category using description field',()=>{ 
            const category= new Category({name:"Movie"})
            expect(()=>{category.update("movie 2",5 as any)}).toThrow(new ValidationError("The description must be a string"))
    
        })

        

    })
    
   
});
