class AddNewTopic
{
    contentManag="//p[normalize-space()='Content management']"
    topic="//p[normalize-space()='Topics (pages)']"
    addNew="//a[normalize-space()='Add new']"
    title="//input[@id='Title']"
    body="//iframe[@id='Body_ifr']"



    // "Menu Content management" click option 
    clickContentManagement(){cy.xpath(this.contentManag).click({force: true})}
        //"Bar Topics" click option 
            clickTopics(){cy.xpath(this.topic).click({force: true})}
                //"Add New" click option 
                    clickAddNew(){cy.xpath(this.addNew).click()}
                        //"Enter Title " Input option 
                            entTitle(til){cy.xpath(this.title).type(til)}

                    //"Enter Body" Input option
                        entBody(bdy){cy.xpath(this.body).then(function($iframe){
                            let ifraamebody = $iframe.contents().find('body')
                                cy.wrap(ifraamebody).type(bdy).type('{selectall}')
                        })}


}

export default AddNewTopic