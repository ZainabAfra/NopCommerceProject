//import { describe } from "mocha";

import AddNewProduct from "../PageObjectsPages/addNewProduct.cy"
import Login from "../PageObjectsPages/LoginPage.cy"

describe('Add New Products', () =>{

    it('New Products',()=>{

        //cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")

        cy.fixture('nopcommerce').then((data)=>{

            const lp = new Login()
            lp.visit()
                lp.setEmailId(data.emailId)
                    lp.setPassword(data.password)
                        lp.btnLogin()
    
            const ANP = new AddNewProduct()
            ANP.clickCatalog()
                ANP.clickProducts()
                    ANP.clickAddNew()
                        ANP.entProName(data.prodName)
                            ANP.entShotDesc(data.Desc)
                                ANP.entsku(data.Sku)
                                    ANP.selVandor()
                            ANP.entStDate(data.StDate)
                                ANP.entEdDate(data.EdDate)
                                    ANP.clickSave()
                                        ANP.verifyMgs()
            

    

        })
       
    })
})