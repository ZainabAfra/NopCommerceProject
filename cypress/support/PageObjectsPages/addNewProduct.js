
class AddNewProduct 
{
    catalog="//p[normalize-space()='Catalog']"
    products="//p[normalize-space()='Products']"
    addNew="//a[normalize-space()='Add new']"
    productName="//input[@id='Name']"
    shortDesc="//textarea[@id='ShortDescription']"
    sku="//input[@id='Sku']"
    vand="//select[@id='VendorId']"
    stDate="//input[@id='AvailableStartDateTimeUtc']"
    edDate="//input[@id='AvailableEndDateTimeUtc']"
    save="//button[@name='save']"
    suffmsg="//div[@class='alert alert-success alert-dismissable']"

        
    clickCatalog()
    {
        cy.xpath(this.catalog).click({force: true})
    }

    clickProducts()
    {
        cy.xpath(this.products).click({force: true})
    }

    clickAddNew()
    {
        cy.xpath(this.addNew).click()
    }

    entProName(Pname)
    {
        cy.xpath(this.productName).type(Pname)
    }

    entShotDesc(SDesc)
    {
        cy.xpath(this.shortDesc).type(SDesc)
    }

    entsku(su)
    {
        cy.xpath(this.sku).type(su)
    }

    entCatga()
    {
        
        cy.get("#SelectedCategoryIds_taglist").select('Computers').should('have.value','Computers')
    }

    selVandor()
    {
        
        cy.xpath(this.vand).select('Vendor 1').should('have.value','1')
    }

    entStDate(SD)
    {
        cy.xpath(this.stDate).type(SD).should('be.visible')
    }

    entEdDate(ED)
    {
        cy.xpath(this.edDate).type(ED).should('be.visible')
    }

    clickSave()
    {
        cy.xpath(this.save).click()
    }

    verifyMgs()
    {
        cy.xpath(this.suffmsg).should('have.text','\n×\nThe new product has been added successfully.\n')
    }
}

export default AddNewProduct
