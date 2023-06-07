import AddNewTopic from "../../support/PageObjectsPages/addNewTopic"

describe('Add Topics', ()=>{

    before(function(){
        cy.fixture('nopcommerce').then(function(data){
            this.data=data
            cy.login(this.data.emailId, this.data.password)
        })
    })

    after(function(){
        //cy.logout()
        cy.log("Logged out from the application successfully")
    })

    it('Add Topics', function()
    {
        let top = new AddNewTopic()
        cy.log('Entred Add Topics info')

        top.clickContentManagement()
            top.clickTopics()
                top.clickAddNew()
                    top.entTitle(this.data.Title)
                        top.entBody(this.data.CBody)
                            top.clickDisplay()
                                top.verifyPublished()
                                    top.clickInclude()

    })
})