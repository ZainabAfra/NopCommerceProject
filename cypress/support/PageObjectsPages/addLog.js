class AddLog
{
    // Elements for AddLog

    system="//p[normalize-space()='System']"
    log="//p[normalize-space()='Log']"
    tab="#log-grid_wrapper tr"



    //"Menu System" click option 
        clickSystem(){cy.xpath(this.system).click({force: true})}
            //"Bar Log" click option 
                clickLog(){cy.xpath(this.log).click({force: true})}
                    //"Table Log" verify option 
                        verifyTab(){cy.get(this.tab).eq(2)
                            .within(function(){
                                cy.get('td').eq(3).should('12/19/2022 3:47:00 AM')
                           
                                
                            })}
 }                   

export default AddLog