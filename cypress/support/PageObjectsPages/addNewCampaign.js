
class AddNewCampaign
{
    //Element for AddNewCampaign
    
    promotions="//p[normalize-space()='Promotions']"
    campaign="//p[normalize-space()='Campaigns']"
    addNew="//a[normalize-space()='Add new']"
    name="//input[@id='Name']"
    subject="//input[@id='Subject']"
    body="//textarea[@id='Body']"
    plannedDate="//input[@id='DontSendBeforeDate']"
    limitedStore="//select[@id='StoreId']"
    limitedCustomer="//select[@id='CustomerRoleId']"
    save="//button[@name='save']"


    //Action methos for AddNewCampaign

     //"Menu Promotions" click option
     clickPromotions(){cy.xpath(this.promotions).click({force: true})}
        //"Bar Campaigns" click option 
            clickCampaigns(){cy.xpath(this.campaign).click({force:true})}
                //"Add New" click option
                clickAddNew(){cy.xpath(this.addNew).click()}
                    //"Input Name" Input option
                    entName(nm){cy.xpath(this.name).type(nm)}
                        //"Input Subject" input option 
                            entSubject(sb){cy.xpath(this.subject).type(sb)}
                                //"input Body" input option 
                                    entBody(b){cy.xpath(this.body).type(b)}
                                        //"input Date" input option 
                                            entPlanDate(pd){cy.xpath(this.plannedDate).type(pd)}
                                                //"Select Limitied to Store" select option 
                                                    selLimitedStore(){cy.xpath(this.limitedStore)
                                                    .select('Your store name').should('have.value','1')}
                                                        //"Select Limited to Csutomer role" Selct option 
                                                            selLimitedCustomer(){cy.xpath(this.limitedCustomer)
                                                            .select('Forum Moderators').should('have.value','2')}
                                                                //"click save" click option 
                                                                    clicksave(){cy.xpath(this.save).click()}



}
export default AddNewCampaign