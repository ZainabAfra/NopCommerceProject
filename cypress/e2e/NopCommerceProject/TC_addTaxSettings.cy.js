
import AddTaxSettings from "../../support/PageObjectsPages/addTaxSettings";

describe('Add Tax Settings', ()=>{

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

    it('Tax Settings', function()
    {
        let taxSettings = new AddTaxSettings()
        cy.log('Entred Tax Setting info')


        taxSettings.clickConfiguration()
        taxSettings.clickSettings()
        taxSettings.clickTaxSettings()
        taxSettings.selMultiStore()
        taxSettings.selMultiStore()
        taxSettings.selDefaultTax()
        taxSettings.entFirstName(this.data.firstname)
        taxSettings.entLastName(this.data.lastname)
        taxSettings.entEmail(this.data.Aemail)
        taxSettings.selCountry()
        taxSettings.selsProvince()
        taxSettings.entZip(this.data.Zip)
        taxSettings.clickSave()

    })

})