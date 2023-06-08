
class AddTaxSettings
{
    configuration="//p[normalize-space()='Configuration']"
    settings="//p[normalize-space()='Settings']"
    taxsettings="//p[normalize-space()='Tax settings']"
    multistore="//select[@id='store-scope-configuration']"
    taxbasedon="//select[@id='TaxBasedOn']"
    defaulttax="//select[@id='DefaultTaxCategoryId']"
    Fname="//input[@id='DefaultTaxAddress_FirstName']"
    Lname="//input[@id='DefaultTaxAddress_LastName']"
    email="//input[@id='DefaultTaxAddress_Email']"
    country="//select[@id='DefaultTaxAddress_CountryId']"
    sprovince="//select[@id='DefaultTaxAddress_StateProvinceId']"
    zip="//input[@id='DefaultTaxAddress_ZipPostalCode']"
    save="//button[normalize-space()='Save']"




    //"Menu Configuration" click option 
        clickConfiguration(){cy.xpath(this.configuration).click({force: true})}
    //"Bar Setting" click option 
        clickSettings(){cy.xpath(this.settings).click({force: true})}
    //"TaxSettings " click optioin 
        clickTaxSettings(){cy.xpath(this.taxsettings).click({force: true})}
    //"Multi-store" select option 
        selMultiStore(){cy.xpath(this.multistore)
        .select('Your store name')}
    //"TaxBasedOn" select option 
        selTaxBasedOn(){cy.xpath(this.taxbasedon)
        .select('Shipping address').should('have.value','1')}
    //"Default tax" select option
        selDefaultTax(){cy.xpath(this.defaulttax)
        .select('Jewelry',{force: true}).should('have.value','4')}
        
    //"Enter FirstName" input option 
        entFirstName(fn){cy.xpath(this.Fname).type(fn,{force: true})}
    //"Enter LastName" input option 
        entLastName(ln){cy.xpath(this.Lname).type(ln,{force: true})}
    //""Enter Email" input option
        entEmail(eml){cy.xpath(this.email).type(eml,{force: true})}
    //"Select country" select option 
        selCountry(){cy.xpath(this.country)
        .select('United States',{force: true}).should('have.value','1')}
    //"Select State" select option 
        selsProvince(){cy.xpath(this.sprovince)
        .select('Georgia',{force: true}).should('have.value','16')}
    //"Enter ZipCode" input option 
        entZip(zp){cy.xpath(this.zip).type(zp,{force: true})}
    //"Save button" click 
        clickSave(){cy.xpath(this.save).should('exist').click()}

}

export default AddTaxSettings