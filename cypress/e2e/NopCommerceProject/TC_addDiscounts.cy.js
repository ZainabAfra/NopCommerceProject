import AddNewDiscounts from "../../support/PageObjectsPages/addDiscounts"


describe('Add Discount', ()=>{

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

    it('Add New Discount', function()
    {
        let discounts = new AddNewDiscounts()
        cy.log('Entered Discounts info')

        discounts.clickPromations()
            discounts.clickDiscounts()
                discounts.clickAddNew()
                    discounts.clickAdvanced()
                    discounts.verifyActive()
                        discounts.entName(this.data.name)
                             discounts.selDiscountType()
                                discounts.verifyUsePercentage()
                                    discounts.entDiscountAmount(this.data.DiscountAmount)
    })
})