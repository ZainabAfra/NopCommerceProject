class AddPolls
{
    contentManag="//p[normalize-space()='Content management']"
    polls="//p[normalize-space()='Polls']"
    addNew="//a[normalize-space()='Add new']"
    backtopoll="//a[normalize-space()='back to poll list']"
    name="//input[@id='Name']"
    published="//input[@id='Published']"
    showHome="//input[@id='ShowOnHomepage']"
    allowVote="//input[@id='AllowGuestsToVote']"
    startDate="//input[@id='StartDateUtc']"
    endDate="//input[@id='EndDateUtc']"
    limitedStores="SelectedStoreIds_taglist"
    systemKey="//input[@id='SystemKeyword']"
    save="//button[@name='save']"



    // "Menu Content management" click option 
    clickContentManagement(){cy.xpath(this.contentManag).click({force: true})}
        // "Bar Polls" click option 
            clickPolls(){cy.xpath(this.polls).click({force: true})}
                // "Add New" click option    
                clickAddNew(){cy.xpath(this.addNew).click()}
                    // "Back to poll" click option 
                        clickBackToPullList(){cy.xpath(this.backtopoll).click()}
                            // "Input Name" input option 
                                entName(nm){cy.xpath(this.name).type(nm)}
                                    // "Check box verify"
                                        verifyPublished(){cy.xpath(this.published).should('be.checked')}
                                            // "Check box verify"
                                                verifyShowHome(){cy.xpath(this.showHome).should('be.checked')}
                                                    // "Check box verify"
                                                        verifyAllowVote(){cy.xpath(this.allowVote).should('be.not.checked')}
                                                            // " Enter Start Date" Enter option
                                                                entSDate(sd){cy.xpath(this.startDate).type(sd)}
                                                                    // "Enter End Date" Enter Option 
                                                                        entEDate(ed){cy.xpath(this.endDate).type(ed)}
                                                                            // "Select Limited to stores" Select option 
                                                                                selLimitedToStores(){cy.get(this.limitedStores)
                                                                                    .select('Test store 2').should('have.value','1')}
                                                                                    // "Input System Keyword" input option 
                                                                                        entSystemKeyword(sk){cy.xpath(this.systemKey).type(sk)}
                                                                                            //"Click Save" click option 
                                                                                                clickSave(){cy.xpath(this.save).click()}
}

export default AddPolls