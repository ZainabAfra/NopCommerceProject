import AddPolls from "../../support/PageObjectsPages/addPolls"
describe('Add Polls',()=>{

    before(function(){
        cy.fixture('nopcommerce').then(function(data){
            globalThis.data=data
            cy.login(data.login.emailId,data.login.password)
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
                            po.entName(data.pollsData.PName)
                                po.verifyPublished()
                                    po.verifyShowHome()
                                        po.verifyAllowVote()
                                            po.entSDate(data.pollsData.UtcSdate)
                                                po.entEDate(data.pollsData.UtcEdate)
                                                    //po.selLimitedToStores()
                                                        po.entSystemKeyword(data.pollsData.SystemKeyword)
                                                            po.clickSave()
    })
})