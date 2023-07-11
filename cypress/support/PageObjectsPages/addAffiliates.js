//let { generateRandomData } = require('../support/faker');
const addAffiliatesLocators = require('../PagesElements/addAffiliatesLocators.json')
export class AddAffiliates
{

    /*promotions="//p[normalize-space()='Promotions']"
    affiliates="//p[normalize-space()='Affiliates']"
    addNew="//a[normalize-space()='Add new']"
    firstName="//input[@id='Address_FirstName']"
    lastName="//input[@id='Address_LastName']"*/



    
    //"Menu Promotions" click option
    clickPromotions(){
        cy.xpath(addAffiliatesLocators.AddAffiiates.promotions).click({force: true})
        return
    }
    //"Bar Discount" click option
    clickAffiliates(){
        cy.xpath(addAffiliatesLocators.AddAffiiates.affiliates).click({force: true})
        return
    }
    //"Add New" click option
    clickAddNew(){
        cy.xpath(addAffiliatesLocators.AddAffiiates.affiliates).click()
        return
    }
    //"input FirstName" input option
    entFirstName(){
        cy.xpath(addAffiliatesLocators.AddAffiiates.firstName).type(data.firstName)
        return
    }
    //"Input LastName" input option 
    entLastName(){
        cy.xpath(addAffiliatesLocators.AddAffiiates.lastName).type(data.lastName)}
}


//export default addAffiliates
