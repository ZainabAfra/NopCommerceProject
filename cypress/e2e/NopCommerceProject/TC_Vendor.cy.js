//import { describe } from "mocha";
import vendor from "../../support/PageObjectsPages/vendor"

describe('Vendor info',()=>{

    before(function(){
        cy.fixture('nopcommerce').then(function(data){
            this.data=data
            cy.login(this.data.emailId,this.data.password)
            cy.log("Logged in to the application")
        })
    })

    after(function(){
        //cy.logout()
        cy.log("Logged out from the application")
    })

    it('Enter Vendor info',function(){
        
            let ven = new vendor()
            cy.log("Vendor info entred")

            ven.clickCustomers()
                ven.clickbarVendor()
                    ven.clickAddNew()
                        cy.wait(2000)
                        ven.clickSOnOff()
                            ven.entName(this.data.name)
                                ven.entEmail(this.data.Email)
                                    ven.entFirstName(this.data.firstname)
                                        ven.entLastName(this.data.lastname)
                                            ven.entAEmail(this.data.Email)
                                                ven.selCountry()
                                                    ven.selState()
                                                        ven.entCounty(this.data.county)
                                                            ven.entPhone(this.data.PhoneNumber)
                                                                ven.clicksave()
        })
    })
//})