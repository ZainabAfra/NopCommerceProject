
class Shipments
{

    barSales="//p[normalize-space()='Sales']"
    barShipments="//p[normalize-space()='Shipments']"
    StDate="//input[@id='StartDate']"
    EnDate="//input[@id='EndDate']"
    warHouse="//select[@id='WarehouseId']"
    country="//select[@id='CountryId']"
    state="//select[@id='StateProvinceId']"



    /**
     * "Manu Sales" click options
     */
    clickSales() {cy.xpath(this.barSales).click({force: true})}  
        /**
         * "bar Shipments" click options
         */   
        clickShipments() {cy.xpath(this.barShipments).click({force: true})}
            /**
             * "Input Date" enter Start Date
             */
            SelDate(SD){cy.xpath(this.StDate).type(SD)}
                /**
                 * "Input Date" enter End Date
                 */
                EndDate(ED){cy.xpath(this.EnDate).type(ED)}
                    /**
                     * "Select Warehouse" select options
                     */
                    SelWareHouse(){cy.xpath(this.warHouse)
                        .select('Warehouse 1 (New York)').should('be.visible','Warehouse 1 (New York)')}
                             /**
                              * "Select Country" selec options
                               */
                            SelCountry(){cy.xpath(this.country).select('United States')
                                .should('be.visible','United States')}
                                    /**
                                     * "Select state" select options
                                     */
                                SelState(){cy.xpath(this.state).select('Georgia')
                                    .should('be.visible','Georgia')}
    
        
    
}

export default Shipments