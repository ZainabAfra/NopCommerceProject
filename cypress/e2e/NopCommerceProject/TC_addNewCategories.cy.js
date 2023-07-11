import {AddNewCategory, addNewCategoryLocators} from "../../support/PagesElements/addNewCategoryLocators.json";

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

            let NewCategory = new AddNewCategory
            cy.log('Entred New Categories info')

            NewCategory.clickCatalog()
            NewCategory.clickCategories()
            NewCategory.clickAddNew()
            NewCategory.entName(this.data.enName)
            NewCategory.entDescription(this.data.Description)
            NewCategory.selPaCategory()
            NewCategory.clickSave()
        })
    })
