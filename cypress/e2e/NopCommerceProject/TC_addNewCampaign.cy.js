
import AddNewCampaign from "../../support/PageObjectsPages/addNewCampaign";

describe('Manu Promations',()=>{

    before(function(){
        cy.fixture('nopcommerce').then(function(data){
            this.data=data
            cy.login(this.data.emailId,this.data.password)
            cy.log("Logged in to the application successfully")
        })
    })

    after(function(){
        cy.logout()
        cy.log("Logged out from the applicatio successfully")
    })

    it('Bar Campaigns',function(){
        let cam = new AddNewCampaign()
        cy.log("Entred Campaign info")

        cam.clickPromotions()
            cam.clickCampaigns()
                cam.clickAddNew()
                    cam.entName(this.data.cname)
                        cam.entSubject(this.data.Csubject)
                        cam.entBody(this.data.CBody)
                            cam.entPlanDate(this.data.CPlanDate)
                                cam.selLimitedStore()
                                    cam.selLimitedCustomer()
                                        cam.clicksave()

    })
})
