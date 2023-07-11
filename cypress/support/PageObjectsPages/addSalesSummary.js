
const addSalesSummaryLocators = require('../PagesElements/addSalesSummary.json')
export class AddSalesSummary
{
    
    //"Menu Reports" click option 
    clickReports(){
        cy.xpath(addSalesSummaryLocators.AddSalesSummary.report).click({force: true})
        return
    }
    //"Bar Sales Summary" click option 
    clickSalesSummary(){
        cy.xpath(addSalesSummaryLocators.AddSalesSummary.salessummary).click({force: true})
        return
    }
    //"Enter Start Date" input option 
    entStartDate(sd){
        cy.xpath(addSalesSummaryLocators.AddSalesSummary.startDate).type(sd)
        return
    }
    //"Enter End Date" input option
    entEndDate(ed){
        cy.xpath(addSalesSummaryLocators.AddSalesSummary.endDate).type(ed)
        return
    }
    //"Select Store" Select option 
    selStore(){
        cy.xpath(addSalesSummaryLocators.AddSalesSummary.store).select('Your store name').should('have.value','1')
        return
    }
    //"Select Order Status" select option 
    selOrderStatus(){
        cy.xpath(addSalesSummaryLocators.AddSalesSummary.orderstatus).select('Complete').should('have.value','30')
        return
        }
    //"Select Payment Status" select optio 
    selPaymentStatus(){
        cy.xpath(addSalesSummaryLocators.AddSalesSummary.paymentstatus).select('Paid').should('have.value','30')
        return
    }
    //"Select Category" select option
    selCategory(){
        cy.xpath(addSalesSummaryLocators.AddSalesSummary.category).select('Electronics').should('have.value','5')
        return
    }
    //"Select Manafacturer" select option
    selManufacturer(){
        cy.xpath(addSalesSummaryLocators.AddSalesSummary.manufacturer).select('Apple').should('have.value','1')
        return
    }
    //"Select BillingCountry" Select option 
    selBillingCountry(){
        cy.xpath(addSalesSummaryLocators.AddSalesSummary.billingCountry).select('United States').should('have.value','1')
        return
    }
    //"Select Vendor" Select option
    selVendor(){
        cy.xpath(addSalesSummaryLocators.AddSalesSummary.vendor).select('Vendor 1').should('have.value','1')
        return
    }
    //"Select Group By" Select option
    selGroupBy(){
        cy.xpath(addSalesSummaryLocators.AddSalesSummary.groupBy).select('Week').should('have.value','1')
        return
    }

}

//export default AddSalesSummary