class AddNewDiscounts
{
    promations="//p[normalize-space()='Promotions']//i[@class='right fas fa-angle-left ']"
    discounts="//p[normalize-space()='Discounts']"
    addNew="//a[normalize-space()='Add new']"
    onOff="//span[@class='onoffswitch-inner']"
    active="//input[@id='IsActive']"
    name="//input[@id='Name']"
    discountsType="//select[@id='DiscountTypeId']"
    usePercentage="//input[@id='UsePercentage']"
    discountsAmount="//input[@title='0.0000 USD']"
    requiresCouponCode="//input[@id='RequiresCouponCode']"



    //"Menu Promations" click option 
        clickPromations(){cy.xpath(this.promations).click({force: true})}
    //"Bar Discounts" Click option
        clickDiscounts(){cy.xpath(this.discounts).click({force: true})}
    //"Advanced " click option 
        clickAdvanced(){cy.xpath(this.onOff).click({force: true})}
    //"Add New" click option
        clickAddNew(){cy.xpath(this.addNew).click()}
    //"Verify Active" Verification option
        verifyActive(){cy.xpath(this.active).should('be.checked')}
    //"Enter Name" input option
        entName(nm){cy.xpath(this.name).type(nm)}
    //"Select Discount type" Select option
        selDiscountType(){cy.xpath(this.discountsType)
        .select('Assigned to shipping').should('have.value','10')}
    //"Verify Percentage" Verification option
        verifyUsePercentage(){cy.xpath(this.usePercentage).should('be.not.checked')}
    //"Enter Discount amount" input option 
        entDiscountAmount(da){cy.xpath(this.discountsAmount).type(da)}


}

export default AddNewDiscounts