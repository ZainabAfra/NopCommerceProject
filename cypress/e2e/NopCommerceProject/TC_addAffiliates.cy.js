//import faker from "faker";
//import faker from "../support/faker";
//import addAffiliates from "../../support/PageObjectsPages/addAffiliates";
//import addAffiliates from "../../support/PageObjectsPages/addAffiliates";
//let addAffiliates = require('../../support/PageObjectsPages/addAffiliates')

import {AddAffiliates, addAffiliatesLocators} from "../../support/PageObjectsPages/addAffiliates"
describe('Add Affiliates',()=>{

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

    it('Should allow user to add a new Affiliates', function(){

        let Affiliates = new AddAffiliates
        cy.log('Entred Affiliates info')

        //AA.fillOutAddAffiliates()

        AddAffiliates.clickPromotions()
            AddAffiliates.clickAffiliates()
                AddAffiliates.clickAddNew()
                    AddAffiliates.entFirstName(faker.name.entFirstName)
                        AddAffiliates.entLastName(faker.name.entLastName)

        
    })
})