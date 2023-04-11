class AddNewsItems
{
    //Element for AddNewNewsItem

    contentManagement="//p[normalize-space()='Content management']"
    newsItems="//p[normalize-space()='News items']"
    addNew="//a[normalize-space()='Add new']"
    title="//input[@id='Title']"
    fullDes="#Full_ifr"
    //bold="button[title='Bold']"
    shortDes="//textarea[@id='Short']"
    allCom="//input[@id='AllowComments']"
    startDate="//input[@id='StartDateUtc']"
    endDate="//input[@id='EndDateUtc']"
    published="//input[@id='Published']"
    save="//button[@name='save']"

    //Action Methods for AddNewNewsItem

    //"Menu ContentManagement" click option
    clickContentManagement(){cy.xpath(this.contentManagement).click({force: true})}
        //"Bar New Items" click option 
            clickNewItems(){cy.xpath(this.newsItems).click({force: true})}
                //"Add New" click option
                    clickAddNew(){cy.xpath(this.addNew).click()}
                        //"Input Title" input option 
                            entTitle(tit){cy.xpath(this.title).type(tit)}
                                //"Input Short Desc" input option
                                    entShotDes(Srt){cy.xpath(this.shortDes).type(Srt)}
                            
                        //"Full Desctiption" input option 
                        entFullDes(IFM){cy.get(this.fullDes).then(function($iframe){
                            let ifraamebody = $iframe.contents().find('body')
                            cy.wrap(ifraamebody).type(IFM).type('{selectall}')
                            //cy.get("button[title='Bold']").click()
                            
                        })}
                            //"Verify Allow comments" verify option 
                                verifyAllowComments(){cy.xpath(this.allCom).should('be.checked')}
                            //"Input StartDate" input option 
                                entStartDate(sd){cy.xpath(this.startDate).type(sd)}
                                    //"Input EndDate" input option 
                                        entEndDate(ed){cy.xpath(this.endDate).type(ed)}
                                            //"Verify Published" verify option 
                                                verifyPublished(){cy.xpath(this.published).should('be.checked')}
                                                    //"click save" click option 
                                                        clickSave(){cy.xpath(this.save).click()
                                                            .should('be.visible','The new news item has been added successfully.')}
                        
}

export default AddNewsItems