
class Login
{
    txtEmail="//*[@id='Email']"
    txtPassword="//*[@id='Password']"
    btnSubmit="/html/body/div[6]/div/div/div/div/div[2]/div[1]/div/form/div[3]/button"
    lblmsg="cy.get('/html/body/div[3]/div[1]/div[1]/h1')"

    /*visit()
    {
        cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
    }*/
    setEmailId(Email)
    {
        cy.xpath(this.txtEmail).clear().type(Email)
    }

    setPassword(password)
    {
        cy.xpath(this.txtPassword).clear().type(password)
    }

    btnLogin()
    {
        cy.xpath(this.btnSubmit).click()
    }

    verifyLogin()
    {
        cy.xpath(this.lblmsg).should('have.text','Dashboard')
    }

}

export default Login