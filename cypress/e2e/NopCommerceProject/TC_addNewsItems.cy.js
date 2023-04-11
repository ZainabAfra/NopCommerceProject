//import { describe } from "mocha";

import AddNewsItems from "../../support/PageObjectsPages/addNewsItems"


describe("Manu Content Management",()=>{

    before(function(){
        cy.fixture('nopcommerce').then(function(data){
            this.data=data
            cy.login(this.data.emailId,this.data.password ,{failOnStausCode: false} )
            cy.log("Logged in to the application successfully")
        })
    })

    after(function(){
        cy.logout()
        cy.log("Logged out from the applicatio successfully")
    })

    it('Bar News Items', function(){

        let ni = new AddNewsItems()
        cy.log('Entred News Items info')

        ni.clickContentManagement()
            ni.clickNewItems()
                ni.clickAddNew()
                    ni.entTitle(this.data.Title)
                        ni.entShotDes(this.data.ShortDesc)
                        ni.entFullDes(this.data.FullDescription)
                            ni.verifyAllowComments()
                                ni.entStartDate(this.data.Sdate)
                                    ni.entEndDate(this.data.Edate)
                                        ni.verifyPublished()
                                            ni.clickSave()
                                
    })
})