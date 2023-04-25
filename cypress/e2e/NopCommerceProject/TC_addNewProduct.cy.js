import AddNewProduct from "../../support/PageObjectsPages/addNewProduct"

describe('Add New Products', () =>{

    before(function() {
        cy.fixture('nopcommerce').then(function(data){
            this.data=data
            cy.login(this.data.emailId,this.data.password)
            cy.log("Logged in to the application successfully")
        })
        
    })

    after(function(){
        cy.logout()
        cy.log("Logged out from the application successfully")
    })

    it('New Products',function(){

            let ANP = new AddNewProduct()

            ANP.clickCatalog()
                ANP.clickProducts()
                    ANP.clickAddNew()
                        ANP.entProName(this.data.prodName)
                            ANP.entShotDesc(this.data.Desc)
                                ANP.entFullDesc(this.data.FullDescripton)
                                    ANP.entsku(this.data.Sku)
                                        ANP.selVandor()
                                             ANP.entStDate(this.data.StDate)
                                                 ANP.entEdDate(this.data.EdDate)
                                                     ANP.clickSave()
                                                        ANP.verifyMgs()
            

    

        })
       
    })
