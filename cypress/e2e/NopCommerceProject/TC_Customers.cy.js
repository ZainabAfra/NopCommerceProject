//import faker from 'faker'
//import cypress from "cypress";
//import { beforeEach } from "mocha";
//import { after } from "cypress/types/lodash";
import Customers from "../../support/PageObjectsPages/customers";
//var faker = require('faker')


describe('Manu Customers', ()=>{

    it.only('Search Customers', ()=>
    {
        cy.fixture('nopcommerce').then((data)=>{
            cy.login(data.emailId,data.password)
            
            let cus = new Customers()
            

            cus.clickCustomers()
                cus.clickBarCustomers()
                    cus.entEmail(data.Semail)
                        cus.entFirstName(data.firstname)
                            cus.entLastName(data.lastname)
                                cus.selMonth(data.MonthD)
                                    cus.selDay(data.DayDate)

            })
            
        })

        it("AddNewCustomers",()=>
        {
            cy.fixture('nopcommerce').then((data)=>{
                cy.login(data.emailId,data.password)
                cy.log("Login to the application")

                
                
                let cus = new Customers()
                cy.log("Entre customers info")

                cus.clickCustomers()
                    cus.clickBarCustomers()
                        cus.clickAddNew()
                            cus.entEmail(data.Aemail)
                                cus.entPassword(data.PasWod)
                                    cus.entFirstName(data.SearchFName)
                                        cus.entLastName(data.SearchLName)
                                            cus.selGend()
                                                cus.selDob(data.DateOfBirth)
        })
    })
})