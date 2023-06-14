class AddGiftCards
{
    sales="//p[normalize-space()='Sales']//i[contains(@class,'right fas fa-angle-left')]"
    giftCards="//p[normalize-space()='Gift cards']"
    addNewe="//a[normalize-space()='Add new']"
    giftCardsType="//select[@id='GiftCardTypeId']"
    initialValue="//input[@title='0.0000 USD']"
    cardActivated="//input[@id='IsGiftCardActivated']"
    couponCode="//button[@id='generateCouponCode']"
    recipientsName="//input[@id='RecipientName']"
    senderName="//input[@id='SenderName']"
    message="//textarea[@id='Message']"
    save="//button[@name='save']"


    //"Menu Sales" click option
        clickSales(){cy.xpath(this.sales).click({force:true})}
    //"Bar Gift Cards" click option
        clickGiftCards(){cy.xpath(this.giftCards).click({force:true})}
    //"Add New button " click option 
        clickAddNew(){cy.xpath(this.addNewe).click()}
    //"Select Gift Card Type" select option 
        selGiftCardType(){cy.xpath(this.giftCardsType).select('Physical')
        .should('have.value','1')}
    //"Enter Initial value" Enter option 
        entInitialValue(iv){cy.xpath(this.initialValue).type(iv)}
    //"Verify Card Activated" verification option 
        verifyCardActivited(){cy.xpath(this.cardActivated).should('be.not.checked')}
    //"Enter couponCode" input option 
        clickCouponCode(){cy.xpath(this.couponCode).should('exist').click()}
    //"Enter Name" input option 
        entName(nm){cy.xpath(this.recipientsName).should('be.enable').type(nm)}
    //"Enter Email" input option
        entMessage(mgs){cy.xpath(this.message).type(mgs)}
    //"Click Save" click option 
        clickSave(){cy.xpath(this.save).click()
        .should('be.visible','The new gift card has been added successfully.')}

}

export default AddGiftCards