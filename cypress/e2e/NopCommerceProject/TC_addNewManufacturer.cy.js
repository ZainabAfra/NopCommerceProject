
import AddNewManufacture from "../PageObjectsPages/addNewManufacturer.cy"
import Login from "../PageObjectsPages/LoginPage.cy"

describe('Add New Manufacturer', ()=>{

    it('Add_Manufacturer', ()=>
    {
        cy.fixture('nopcommerce').then((data)=>{

            cy.login(data.emailId,data.password)

            let AM = new AddNewManufacture()

            AM.clickCatalog()
                AM.clickManufact()
                    AM.clickAddNew()
    })
    })
})