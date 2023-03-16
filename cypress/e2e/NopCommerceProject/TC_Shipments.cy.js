
import Shipments from "../../support/PageObjectsPages/shipments";


describe('Add Shipments', ()=>
{
    it('Add New Shipments', ()=>{


        cy.fixture('nopcommerce').then((data)=>{

            
            cy.login(data.emailId, data.password)

            let ship = new Shipments()

            ship.clickSales()
                ship.clickShipments()
                    ship.SelDate(data.stDate)
                        ship.EndDate(data.enDate)
                            ship.SelWareHouse()
                                ship.SelCountry()
                                    ship.SelState()
        })
    })
})