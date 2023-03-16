
import Login from "../../support/PageObjectsPages/LoginPage"

describe('Login Page', ()=>{

    it('Login Test', ()=>
    {
        
        cy.login(data.emailId, data.password)
        //cy.title().should('be.equal','Dashboard / nopCommerce administration')

        /*cy.fixture('nopcommerce').then((data)=>{
        
        const lp = new Login()
        lp.visit()
            lp.setEmailId(data.emailId)
                lp.setPassword(data.password)
                    lp.btnLogin()
        //lp.verifyLogin()*/

        })

        
    })
