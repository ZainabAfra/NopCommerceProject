class manuOrders
{
    barSales = "//p[normalize-space()='Sales']"
    barOrders="//p[contains(text(),'Orders')]"
    stDate="//input[@id='StartDate']"
    enDate="//input[@id='EndDate']"

    clickSales()
    {
        cy.xpath(this.barSales).click({force: true})
    }
    clickOrders(Orders)
    {
        cy.xpath(this.barOrders).contains(Orders)
    }
    clickShipments()
    {
        cy.xpath(this.barShipments).click({force: true})
    }
    entStDate(SD)
    {
        cy.xpath(this.stDate).type(SD)
    }
    entEnDate(ED)
    {
        cy.xpath(this.enDate).type(ED)
    }
}


export default manuOrders