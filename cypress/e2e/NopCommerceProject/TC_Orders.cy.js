import manuOrders from "../PageObjectsPages/orders.cy"
import Login from "../PageObjectsPages/LoginPage.cy"

describe('Add Orders', ()=>{

    it('Add_Order', ()=>{

        cy.fixture('nopcommerce').then((data)=>{

            const lp = new Login()

            lp.visit()
                lp.setEmailId(data.emailId)
                    lp.setPassword(data.password)
                        lp.btnLogin()

            let Odr = new manuOrders()

            Odr.clickSales()
                Odr.clickOrders()
                    Odr.entStDate()
                        Odr.entEnDate()

        })
    })
})