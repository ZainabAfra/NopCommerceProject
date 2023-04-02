
//import faker from "faker";
import faker from "../support/faker";
//import addAffiliates from "../../support/PageObjectsPages/addAffiliates";
import addAffiliates from "../../support/PageObjectsPages/addAffiliates";

//let addAffiliates = require('../../support/PageObjectsPages/addAffiliates')

describe('Affiliates',()=>{

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

    it('Should allow user to add a new Affiliates',()=>{

        let AA = new addAffiliates()

        AA.fillOutAddAffiliates()

        AA.clickPromotions()
            AA.clickAffiliates()
                AA.clickAddNew()
                    AA.entFirstName(faker.name.entFirstName)
                        AA.entLastName(faker.name.entLastName)

        
    })
})