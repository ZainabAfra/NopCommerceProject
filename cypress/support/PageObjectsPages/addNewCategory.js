
class AddNewCategory
{
    // Elements for AddNewCategory
    catalog="//p[normalize-space()='Catalog']"
    catgor="//p[normalize-space()='Categories']"
    addNew="//a[normalize-space()='Add new']"
    catName="//input[@id='Name']"
    description="#Description_ifr"
    patcat="//select[@id='ParentCategoryId']"
    save="button[name='save']"

    
    
     // "Menu Calalog" click option
        clickCatalog() {cy.xpath(this.catalog).click({force: true})}
            //"Bar Categories" click option
                clickCategories() { cy.xpath(this.catgor).click({force: true})}            
                    //"Add New" click option
                        clickAddNew() {cy.xpath(this.addNew).click()}            
                            //"Input Name" enter Name
                                entName(NM) {cy.xpath(this.catName).type(NM)}
                                    //"input Description" Input option 
                                        entDescription(Des){cy.get(this.description).then(function($iframe){
                                            let ifraamebody = $iframe.contents().find('body')
                                            cy.wrap(ifraamebody).type(Des)
                                        })}
                                            //"Select Category" select option
                                            selPaCategory() {cy.xpath(this.patcat).select('Computers').should('have.value','1')}
                                                //"Click Save" Save option 
                                                    clickSave(){cy.get(this.save).should('have.css','background-color','rgb(60, 141, 188)').click()}



}


export default AddNewCategory