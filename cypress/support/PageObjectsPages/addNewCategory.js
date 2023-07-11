const addNewCategoryLocators = require('../PagesElements/addNewCategoryLocators.json')
export class AddNewCategory
{

    //"Menu Calalog" click option
    clickCatalog() {
        cy.xpath(addNewCategoryLocators.AddNewCategory.catalog).click({force: true})
        return
    }
    //"Bar Categories" click option
    clickCategories() { 
        cy.xpath(addNewCategoryLocators.AddNewCategory.catgor).click({force: true})
        return
    }            
    //"Add New" click option
    clickAddNew() {
        cy.xpath(addNewCategoryLocators.AddNewCategory.addNew).click()
        return
    }            
    //"Input Name" enter Name
    entName(NM) {
        cy.xpath(addNewCategoryLocators.AddNewCategory.catName).type(NM)
        return
    }
    //"input Description" Input option 
    entDescription(Des){
        cy.get(addNewCategoryLocators.AddNewCategory.description).then(function($iframe){
                let ifraamebody = $iframe.contents().find('body')
                    cy.wrap(ifraamebody).type(Des)
    })
    return
    }
    //"Select Category" select option
    selPaCategory() {
        cy.xpath(addNewCategoryLocators.AddNewCategory.patcat).select('Computers').should('have.value','1')
        return
    }
    //"Click Save" Save option 
    clickSave(){
        cy.get(addNewCategoryLocators.AddNewCategory.save).should('have.css','background-color','rgb(60, 141, 188)').click()
        return
    }



}


//export default AddNewCategory