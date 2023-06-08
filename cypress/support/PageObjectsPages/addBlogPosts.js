class AddBlogPosts
{
    contentManag="//p[normalize-space()='Content management']"
    blogposts="//p[normalize-space()='Blog posts']"
    addNew="//a[normalize-space()='Add new']"
    titile="//input[@id='Title']"
    body="//iframe[@id='Body_ifr']"
    bodyoverview="//textarea[@id='BodyOverview']"
    tags="//ul[@class='tag-editor ui-sortable']"




        //"Menu ContentManagement" click option 
        clickContentManagement(){cy.xpath(this.contentManag).click({force: true})}

           //"Bar New Items" click option 
                entBody(bdy){cy.xpath(this.blogposts).then(function($iframe){
                    let ifraamebody = $iframe.contents().find('body')
                        cy.wrap(ifraamebody).type(bdy).type('{selectall}')
                })}

                //"Entre BodyOverView" input option
                    entBodyOverview(bo){cy.xpath(this.bodyoverview).type(bo)}
                        //"Enter Tags" input option
                            entTags(tg){cy.xpath(this.tags).type(tg)}
}

export default AddBlogPosts