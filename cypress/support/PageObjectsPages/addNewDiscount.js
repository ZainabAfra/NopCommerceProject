
class AddNewDiscount
{
    //Element for AddNewDiscount

    promotions="//p[normalize-space()='Promotions']"
    discount="//p[normalize-space()='Discounts']"
    addNew="//a[normalize-space()='Add new']"
    onOff="//span[@class='onoffswitch-inner']"
    active="//input[@id='IsActive']"
    name="//input[@id='Name']"
    discountType="//select[@id='DiscountTypeId']"
    startDate="//input[@id='StartDateUtc']"
    endDate="//input[@id='EndDateUtc']"
    discountlimit="//select[@id='DiscountLimitationId']"
    save="//button[@name='save']"
    
    

    //"Menu Promotions" click option
    clickPromotions(){cy.xpath(this.promotions).click({force: true})}
        //"Bar Discount" click option
            clickDiscount(){cy.xpath(this.discount).click({force: true})}
                //"Add New" click option
                    clickAddNew(){cy.xpath(this.addNew).click()}
                        //"Advanced " click option 
                            clickonOff(){cy.xpath(this.onOff).click({force: true})}
                                //"Is Active" verification option 
                                    verifyActive(){cy.xpath(this.active).should('be.checked')}
                                        //"Input Name" Input option
                                            entName(nm){cy.xpath(this.name).type(nm)}
                                                //"Select DiscountType"  Select option 
                                                    selDiscountType(){cy.xpath(this.discountType)
                                                        .select('Assigned to shipping').should('have.value','10')}
                                                            //"Select StartDate" select option 
                                                                selSDate(sd){cy.xpath(this.startDate).type(sd)}
                                                                    //"Select EndDate" select option 
                                                                        selEDate(ed){cy.xpath(this.endDate).type(ed)}
                                                                            //"Select Discount Limitation" select option 
                                                                                selDiscountLimit(){cy.xpath(this.discountlimit)
                                                                                    .select("N times per customer").should('exist')}
                                                                                        //"Click Save" Click option 
                                                                                            clickSave(){cy.xpath(this.save).click()
                                                                                                .should('be.visible','The new discount has been added successfully.')}
                                                                                                
                                                                
                                                                                                         

    
}

export default AddNewDiscount