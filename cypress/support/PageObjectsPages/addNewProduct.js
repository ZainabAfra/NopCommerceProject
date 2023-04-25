
class AddNewProduct 
{
    catalog="//p[normalize-space()='Catalog']"
    products="//p[normalize-space()='Products']"
    addNew="//a[normalize-space()='Add new']"
    productName="//input[@id='Name']"
    shortDesc="//textarea[@id='ShortDescription']"
    fullDescription="#FullDescription_ifr"
    sku="//input[@id='Sku']"
    vand="//select[@id='VendorId']"
    stDate="//input[@id='AvailableStartDateTimeUtc']"
    edDate="//input[@id='AvailableEndDateTimeUtc']"
    save="//button[@name='save']"
    suffmsg="//div[@class='alert alert-success alert-dismissable']"

    //"Menu Calalog" click option     
    clickCatalog(){cy.xpath(this.catalog).click({force: true})}
        // "Bar Product" click option
                clickProducts(){cy.xpath(this.products).click({force: true})}
                    // "Add New" click option    
                        clickAddNew(){cy.xpath(this.addNew).click()}
                            //"Input Name" input option 
                                entProName(Pname){cy.xpath(this.productName).type(Pname)}
                                    //"Input Short Descriiption" input option 
                                        entShotDesc(SDesc){cy.xpath(this.shortDesc).type(SDesc)}
                                            // "Input Full Description" Input Option 
                                                entFullDesc(Desc){cy.get(this.fullDescription).then(function($iframe){
                                                    let ifraamebody = $iframe.contents().find('body')
                                                    cy.wrap(ifraamebody).type(Desc)
                                                    })}
                                            // "Input SKU" input opeion 
                                            entsku(su){cy.xpath(this.sku).type(su)}
                                                // "Input Catagory " input option 
                                                 entCatga(){cy.get("#SelectedCategoryIds_taglist").select('Computers').should('have.value','Computers')}
                                                    // "Select Vendor" select option 
                                                        selVandor(){cy.xpath(this.vand).select('Vendor 1').should('have.value','1')}
                                                            // "Select StartDate" Select option 
                                                                entStDate(SD){cy.xpath(this.stDate).type(SD).should('be.visible')}
                                                                    // "Select EndDate" Select option 
                                                                        entEdDate(ED){cy.xpath(this.edDate).type(ED).should('be.visible')}
                                                                            // " Click Save" click option 
                                                                                 clickSave(){cy.xpath(this.save).click()}
                                                                                    // "Verify Message" Verify option 
                                                                                            verifyMgs(){cy.xpath(this.suffmsg).should('have.text','\n×\nThe new product has been added successfully.\n')}
}

export default AddNewProduct
