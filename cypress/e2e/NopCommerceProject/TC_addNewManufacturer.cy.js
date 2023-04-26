import AddNewManufacture from "../../support/PageObjectsPages/addNewManufacturer"

describe('Add New Manufacturer', ()=>{

    before(function(){
        cy.fixture('nopcommerce').then(function(data){
            this.data=data
            cy.login(this.data.emailId,this.data.password)
            cy.log("Logged in to the appliction succssfully")
        })
    })

    after(function(){
        cy.logout()
        cy.log("Logged out from the application successfully")
    })

    it('Add_Manufacturer', function()
    {
        
            let AM = new AddNewManufacture()
            cy.log("Entred Add new Manufacturer info")

            AM.clickCatalog()
                AM.clickManufact()
                    AM.clickAddNew()
                        AM.clickAdvanced()
                            AM.entName(this.data.MName)
                                AM.entDesc(this.data.MDescription)
                                    AM.clickSave()
    })
    })
