
class AddNewManufacture
{
    catalog="//p[normalize-space()='Catalog']"
    manufacturers="//p[normalize-space()='Manufacturers']"
    addNew="//a[normalize-space()='Add new']"
    advanced="//span[@class='onoffswitch-inner']"
    name="//input[@id='Name']"
    Description="//iframe[@id='Description_ifr']"
    save="//button[@name='save']"
    suffmsg="//div[@class='alert alert-success alert-dismissable']"


    //"Menu Calalog" click option     
    clickCatalog(){cy.xpath(this.catalog).click({force: true})}
        // "Bar ManuFactures" click option 
            clickManufact(){cy.xpath(this.manufacturers).click({force: true})}
                // "Add New" click option    
                clickAddNew(){cy.xpath(this.addNew).click()}
                    // "Click Advanced" click option 
                        clickAdvanced(){cy.xpath(this.advanced).click({force: true})}
                            // "Input Name field" input option 
                                entName(nm){cy.xpath(this.name).type(nm)}
                                    // "Input Description" input filed option 
                                        entDesc(Des){cy.xpath(this.Description).then(function($iframe){
                                            let ifraamebody = $iframe.contents().find('body')
                                            cy.wrap(ifraamebody).type(Des)
                                        })}
                                            // "Click Save " click option 
                                                clickSave(){cy.xpath(this.save).click()}
                                                    // "Verify Message" Verify option 
                                                    verifyMgs(){cy.xpath(this.suffmsg).should('have.text','\n×\nThe new manufacturer has been added successfully.\n')}

   
}

export default AddNewManufacture