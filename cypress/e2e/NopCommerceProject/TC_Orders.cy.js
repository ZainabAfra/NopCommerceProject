import manuOrders from "../PageObjectsPages/orders.cy"
import Login from "../PageObjectsPages/LoginPage.cy"

describe('Add Orders', ()=>{

    it('Add_Order', ()=>{

        cy.fixture('nopcommerce').then((data)=>{

            cy.login(data.emailId, data.password)

            let Odr = new manuOrders()

            Odr.clickSales()
                Odr.clickOrders()
                    Odr.entStDate()
                        Odr.entEnDate()

        })
    })
})