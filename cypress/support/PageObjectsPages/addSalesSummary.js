
class AddSalesSummary
{
    report="//p[normalize-space()='Reports']//i[contains(@class,'right fas fa-angle-left')]"
    salessummary="//p[normalize-space()='Sales summary']"
    startDate="//input[@id='StartDate']"
    endDate="//input[@id='EndDate']"
    store="//select[@id='StoreId']"
    orderstatus="//select[@id='OrderStatusId']"
    paymentstatus="//select[@id='PaymentStatusId']"
    category="//select[@id='CategoryId']"
    manufacturer="//select[@id='ManufacturerId']"
    billingCountry="//select[@id='BillingCountryId']"
    vendor="//select[@id='VendorId']"
    groupBy="//select[@id='SearchGroupId']"


    //"Menu Reports" click option 
        clickReports(){cy.xpath(this.report).click({force: true})}
    //"Bar Sales Summary" click option 
        clickSalesSummary(){cy.xpath(this.salessummary).click({force: true})}
    //"Enter Start Date" input option 
        entStartDate(sd){cy.xpath(this.startDate).type(sd)}
    //"Enter End Date" input option
        entEndDate(ed){cy.xpath(this.endDate).type(ed)}
    //"Select Store" Select option 
        selStore(){cy.xpath(this.store).select('Your store name')
        .should('have.value','1')}
    //"Select Order Status" select option 
        selOrderStatus(){cy.xpath(this.orderstatus).select('Complete')
        .should('have.value','30')}
    //"Select Payment Status" select optio 
        selPaymentStatus(){cy.xpath(this.paymentstatus).select('Paid')
        .should('have.value','30')}
    //"Select Category" select option
        selCategory(){cy.xpath(this.category).select('Electronics')
        .should('have.value','5')}
    //"Select Manafacturer" select option
        selManufacturer(){cy.xpath(this.manufacturer).select('Apple')
        .should('have.value','1')}
    //"Select BillingCountry" Select option 
        selBillingCountry(){cy.xpath(this.billingCountry).select('United States')
        .should('have.value','1')}
    //"Select Vendor" Select option
        selVendor(){cy.xpath(this.vendor).select('Vendor 1')
        .should('have.value','1')}
    //"Select Group By" Select option
        selGroupBy(){cy.xpath(this.groupBy).select('Week')
        .should('have.value','1')}

}

export default AddSalesSummary