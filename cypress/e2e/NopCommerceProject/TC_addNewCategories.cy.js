
import AddNewCategory from "../../support/PageObjectsPages/addNewCategory";


describe('Add New Categories', ()=>{

    before(function(){
        cy.fixture('nopcommerce').then(function(data){
            this.data=data
            cy.login(this.data.emailId,this.data.password,{failOnStausCode: false})
            cy.log("Logged in to the application successfully")
        })
    })

    after(function(){
        cy.logout()
        cy.log("Logged out from the applicatio successfully")
    })

    it('Add_Categories',function(){

            let AC = new AddNewCategory()
            cy.log('Entred New Categories info')

            AC.clickCatalog()
                AC.clickCategories()
                    AC.clickAddNew()
                        AC.entName(this.data.enName)
                            AC.entDescription(this.data.Description)
                                AC.selPaCategory()
                                    AC.clickSave()
        })
    })
