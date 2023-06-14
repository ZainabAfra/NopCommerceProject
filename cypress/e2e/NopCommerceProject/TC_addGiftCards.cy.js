
import AddGiftCards from "../../support/PageObjectsPages/addGiftCards";

describe('Add Gift Card',()=>{

    before(function(){
        cy.fixture('nopcommerce').then(function(data){
            this.data=data
            cy.login(this.data.emailId, this.data.password)
        })
    })

    after(function(){
        //cy.logout()
        cy.log("Logged out from the application successfully")
    })

    it('Add Gift Card', function()
    {
        let GiftCards = new AddGiftCards()
        cy.log('Entred Gift Cards info')

        GiftCards.clickSales()
        GiftCards.clickGiftCards()
        GiftCards.clickAddNew()
        GiftCards.selGiftCardType()
        GiftCards.entInitialValue(this.data.Value)
        GiftCards.verifyCardActivited()
        GiftCards.clickCouponCode()
        GiftCards.entName(this.data.name)
        GiftCards.entMessage(this.data.Message)
        GiftCards.clickSave()
    })
})