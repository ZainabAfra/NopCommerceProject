//import faker from "faker"

class Customers
{
    //Elements for Customers
    manuCust="//a[@href='#']//p[contains(text(),'Customers')]"
    barCust="//a[@href='/Admin/Customer/List']//p[contains(text(),'Customers')]"
    email="//input[@id='SearchEmail']"
    Fname="//input[@id='SearchFirstName']"
    Lname="//input[@id='SearchLastName']"
    Mdate="//select[@id='SearchMonthOfBirth']"
    Ddate="//select[@id='SearchDayOfBirth']"
    addNew="//a[normalize-space()='Add new']"
    aEmail="//input[@id='Email']"
    sPw="//input[@id='Password']"
    SFname="//input[@id='FirstName']"
    SLname="//input[@id='LastName']"
    Gender="//input[@id='Gender_Male']"
    DoB="//input[@id='DateOfBirth']"


    
    //"manuCustomers" click options
    clickCustomers(){cy.xpath(this.manuCust).click({force: true})}

         //"barCustomers" click options         
        clickBarCustomers(){cy.xpath(this.barCust).click({force: true})}
            
            //"input email" enter email              
            entEmail(SEM){cy.xpath(this.email).type(SEM)}
                
                 //"Input First Name" enter Name                 
                entFirstName(FN){cy.xpath(this.Fname).type(FN)}
                    
                      //"Input Last name" enter name                  
                    entLastName(LN){cy.xpath(this.Lname).type(LN)}
                        
                         //"Select Month Date" Select options
                        selMonth(){cy.xpath(this.Mdate).select('10').should('have.value','10')}
                            
                             //"Select Day Date" Select options
                            selDay(){cy.xpath(this.Ddate).select('20').should('have.value','20')}
        
         //"Add New" Click Options 
        clickAddNew(){cy.xpath(this.addNew).click()}

             //"input email" enter email           
            entEmail(EM){cy.xpath(this.aEmail).type(EM)}

               //"input Password" enter Password
               entPassword(PW){cy.xpath(this.sPw).type(PW)}
            
                    //"Input FirstName" enter first name 
                   entFirstName(SFN){cy.xpath(this.SFname).type(SFN)}

                         //"Input LastName" enter last name
                         entLastName(SLN){cy.xpath(this.SLname).type(SLN)}
                         
                              //"Select Gender" select opetions
                                   selGend(){cy.xpath(this.Gender).click()}

                                        //"Select Date of Birth" select DOB
                                        selDob(DB){cy.xpath(this.DoB).type(DB)}
                    
            

}

export default Customers