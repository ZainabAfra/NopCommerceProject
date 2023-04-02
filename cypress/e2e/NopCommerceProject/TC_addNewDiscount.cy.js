import AddNewDiscount from "../../support/PageObjectsPages/addNewDiscount"
//import DatePickerPage from "../../support/PageObjectsPages/DatePickerPage"

describe('Manu Promotions',()=>{

    before(function(){
        cy.fixture('nopcommerce').then(function(data){

            this.data=data
            cy.login(this.data.emailId,this.data.password)
            cy.log("Logged in to the application")
    })
    
})
    after(function(){
        //cy.logout()
        cy.log("Log out from the aplication")
})


    it('Bar  Discounts',function(){

            let dis = new AddNewDiscount()
            cy.log("Entred Discount info")
            //DatePickerPage.selectRandomDate()

            dis.clickPromotions()
                dis.clickDiscount()
                    dis.clickAddNew()
                        dis.clickonOff()
                            dis.verifyActive()
                                dis.entName(this.data.name)
                                    dis.selDiscountType()
                                        dis.selSDate(this.data.stDate)
                                            dis.selEDate(this.data.enDate)
                                                dis.selDiscountLimit()
                                                    
        })
    })


