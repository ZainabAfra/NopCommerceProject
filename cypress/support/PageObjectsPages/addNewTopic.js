class AddNewTopic
{
    contentManag="//p[normalize-space()='Content management']"
    topic="//p[normalize-space()='Topics (pages)']"
    addNew="//a[normalize-space()='Add new']"
    title="//input[@id='Title']"
    body="//iframe[@id='Body_ifr']"
    display='//*[@id="topic-display"]/div[1]/div[2]/button'
    published="//input[@id='Published']"
    includeMenu="//input[@id='IncludeInTopMenu']"
    save="//button[@name='save']"
    


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

                            // "Display" click option 
                                clickDisplay(){cy.xpath(this.display).click()}
                                    //"Published" verification option   
                                        verifyPublished(){cy.xpath(this.published).should('be.checked')}
                                            //"Include in top menu" check option 
                                                clickInclude(){cy.xpath(this.includeMenu).click().should('be.checked')}
                                                    //"Save button" click option 
                                                        save(){cy.xpath(this.save).click()}


}

export default AddNewTopic