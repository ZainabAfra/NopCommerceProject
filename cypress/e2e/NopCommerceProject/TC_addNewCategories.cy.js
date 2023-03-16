
import AddNewCategory from "../../support/PageObjectsPages/addNewCategory";


describe('Add New Categories', ()=>{

    it('Add_Categories',()=>{

        cy.fixture('nopcommerce').then((data)=>{

            cy.login(data.emailId,data.password)

            let AC = new AddNewCategory()

            AC.clickCatalog()
                AC.clickCategories()
                    AC.clickAddNew()
                        AC.entName(data.enName)
                            AC.selPaCategory()
        })
    })
})