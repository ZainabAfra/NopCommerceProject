
class vendor 
{
    //Elements for Vendor

    manuCust="//a[@href='#']//p[contains(text(),'Customers')]"
    barVend="//p[normalize-space()='Vendors']"
    addNew="//a[@class='btn btn-primary']"
    onOff="//span[@class='onoffswitch-inner']"
    name="//input[@id='Name']"
    email="//input[@id='Email']"
    Fname="//input[@id='Address_FirstName']"
    Lname="//input[@id='Address_LastName']"
    AEmail="//input[@id='Address_Email']"
    conutry="//select[@id='Address_CountryId']"
    state="//select[@id='Address_StateProvinceId']"
    county="//input[@id='Address_County']"
    phone="//input[@id='Address_PhoneNumber']"
    save="//button[@name='save']"

    
    //"manuCustomers" click options
    clickCustomers(){cy.xpath(this.manuCust).click({force: true})}
        //"barVendor" click options
        clickbarVendor(){cy.xpath(this.barVend).click({force: true})}
            //"Add_New" click options
            clickAddNew(){cy.xpath(this.addNew).click()}
                //"Switch OnOff" click options
                    clickSOnOff(){cy.xpath(this.onOff).click({force: true})}
                    //"Input name" Input options
                        entName(nm){cy.xpath(this.name).type(nm)}
                        //"Input email" input option 
                            entEmail(eml){cy.xpath(this.email).type(eml)}
                                //"Input FirstName" input options 
                                entFirstName(FN){cy.xpath(this.Fname).type(FN)}
                                    //"Input LastName" input options
                                    entLastName(LN){cy.xpath(this.Lname).type(LN)}
                                        //Input Email" input options
                                        entAEmail(Aeml){cy.xpath(this.AEmail).type(Aeml)}
                                            //"Select Country" Select option
                                                selCountry(){cy.xpath(this.conutry).select('United States').should('have.value','1')}
                                                    //"Select State/Province" Selecing option 
                                                        selState(){cy.xpath(this.state).select('Georgia').should('have.value','16')}
                                                            //"Input County" Input Option 
                                                                entCounty(cnt){cy.xpath(this.county).type(cnt)}
                                                                    //"Input Phone Number " input phone number
                                                                        entPhone(pn){cy.xpath(this.phone).type(pn)}
                                                                            //"Click save" click option 
                                                                                clicksave(){cy.xpath(this.save).click()}
}   

export default vendor