import { Category } from "./category";

describe('Category Unit Tests',()=>{

    test("contructor of category",()=>{
       const category= new Category("Movie");
       expect(category.name).toBe("Movie")

    })

});