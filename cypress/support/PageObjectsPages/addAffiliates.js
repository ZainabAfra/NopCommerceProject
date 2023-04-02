let { generateRandomData } = require('../support/faker');

class addAffiliates
{

    promotions="//p[normalize-space()='Promotions']"
    affiliates="//p[normalize-space()='Affiliates']"
    addNew="//a[normalize-space()='Add new']"
    firstName="//input[@id='Address_FirstName']"
    lastName="//input[@id='Address_LastName']"



    fillOutAddAffiliates(){

        let data = generateRandomData();
        
        //"Menu Promotions" click option
            clickPromotions();
            {cy.xpath(this.promotions).click({force: true})}
                //"Bar Discount" click option
                clickAffiliates();
                {cy.xpath(this.discount).click({force: true})}
                    //"Add New" click option
                    clickAddNew();
                    {cy.xpath(this.addNew).click()}
                        //"input FirstName" input option
                            entFirstName();
                            {cy.xpath(this.firstName).type(data.firstName)}
                                //"Input LastName" input option 
                                    entLastName();
                                    {cy.xpath(this.lastName).type(data.lastName)}
    }
}

export default addAffiliates
