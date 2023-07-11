
import {AddSalesSummary, addSalesSummaryLocators} from "../../support/PageObjectsPages/addSalesSummary";


describe('Add Sales Summary', ()=>{

    before(function(){
        cy.fixture('nopcommerce').then(function(data){
            globalThis.data=data
            cy.login(data.login.emailId, data.login.password)
        })
    })

    after(function(){
        cy.logout()
        cy.log("Logged out from the application successfully")
    })

    it('Sales Summary', function()
    {
        //let SalesSummary = new AddSalesSummary()
        let SalesSummary = new AddSalesSummary
        cy.log('Entred Sales Summary info')

        SalesSummary.clickReports()
        SalesSummary.clickSalesSummary()
        SalesSummary.entStartDate(data.StDate)
        SalesSummary.entEndDate(data.EdDate)
        SalesSummary.selStore()
        SalesSummary.selOrderStatus()
        SalesSummary.selPaymentStatus()
        SalesSummary.selCategory()
        SalesSummary.selManufacturer()
        SalesSummary.selBillingCountry()
        SalesSummary.selVendor()



    })
})