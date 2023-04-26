import AddPolls from "../../support/PageObjectsPages/addPolls"
describe('Add Polls',()=>{

    before(function(){
        cy.fixture('nopcommerce').then(function(data){
            this.data=data
            cy.login(this.data.emailId,this.data.password)
        })
    })

    after(function(){
        cy.logout()
        cy.log("Logged out from the application successfully")
    })

    it('Add_Polls', function()
    {
        let po = new AddPolls()
        cy.log('Entred Add Polls info')

        po.clickContentManagement()
            po.clickPolls()
                po.clickAddNew()
                    po.clickBackToPullList()
                        po.clickAddNew()
                            po.entName(this.data.PName)
                                po.verifyPublished()
                                    po.verifyShowHome()
                                        po.verifyAllowVote()
                                            po.entSDate(this.data.UtcSdate)
                                                po.entEDate(this.data.UtcEdate)
                                                    //po.selLimitedToStores()
                                                        po.entSystemKeyword(this.data.SystemKeyword)
                                                            po.clickSave()
    })
})