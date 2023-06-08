import AddBlogPosts from "../../support/PageObjectsPages/addBlogPosts"


describe('Add Blog post', ()=>{

    before(function(){
        cy.fixture('nopcommerce').then(function(data){
            this.data=data
            cy.login(this.data.emailId, this.data.password)
        })
    })

    after(function(){
        cy.logout()
        cy.log("Logged out from the application successfully")
    })

    it('Add Blog post', function()
    {
        let blgpst = new AddBlogPosts()
        cy.log('Entred Add Blogs posts')

        blgpst.clickContentManagement()
            blgpst.entBody(this.data.Title)
                blgpst.entBodyOverview(this.data.BodyOverView)
                    blgpst.entTags(this.data.Tags)
    })
})