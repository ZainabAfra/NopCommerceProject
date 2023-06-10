
import AddSalesSummary from "../../support/PageObjectsPages/addSalesSummary";

describe('Add Sales Summary', ()=>{

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

    it('Sales Summary', function()
    {
        let SalesSummary = new AddSalesSummary()
        cy.log('Entred Sales Summary info')

        SalesSummary.clickReports()
        SalesSummary.clickSalesSummary()
        SalesSummary.entStartDate(this.data.StDate)
        SalesSummary.entEndDate(this.data.EdDate)
        SalesSummary.selStore()
        SalesSummary.selOrderStatus()
        SalesSummary.selPaymentStatus()
        SalesSummary.selCategory()
        SalesSummary.selManufacturer()
        SalesSummary.selBillingCountry()
        SalesSummary.selVendor()



    })
})