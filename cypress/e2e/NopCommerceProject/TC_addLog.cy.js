import AddLog from "../../support/PageObjectsPages/addLog"

describe("Menu System",()=>{

    before(function(){
        cy.fixture('nopcommerce').then(function(data){
            this.data=data
            cy.login(this.data.emailId,this.data.password ,{failOnStausCode: false} )
            cy.log("Logged in to the application successfully")
        })
    })

    after(function(){
        //cy.logout()
        cy.log("Logged out from the applicatio successfully")
})

        it('Bar Log', function(){

            let lg = new AddLog()
            cy.log("Verify log inof")

            lg.clickSystem()
                lg.clickLog()
                    lg.verifyTab()
        })
})