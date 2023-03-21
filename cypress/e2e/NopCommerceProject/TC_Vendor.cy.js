//import { describe } from "mocha";
import vendor from "../../support/PageObjectsPages/vendor"

describe('Vendor info',()=>{

    it('Enter Vendor info',()=>{

        cy.fixture('nopcommerce').then((data)=>{
            cy.login(data.emailId, data.password)

            let ven = new vendor()

            ven.clickCustomers()
                ven.clickbarVendor()
                    ven.clickAddNew()
                        cy.wait(2000)
                        ven.clickSOnOff()
                            ven.entName(data.name)
                                ven.entEmail(data.Email)
                                    ven.entFirstName(data.firstname)
                                        ven.entLastName(data.lastname)
                                            ven.entAEmail(data.Email)
                                                ven.selCountry()
        })
    })
})