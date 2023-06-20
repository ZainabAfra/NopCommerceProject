describe('API Testing', ()=>{


    it.skip("Appraoch1-Hard coded json object",()=>{


        const requestBody={

                            tourist_name: "Afsar",
                            tourist_email: "Afsar012@gmail.com",
                            tourist_location: "USA"
                        }

        cy.request(
                    {
                        method: "POST",
                        url: 'http://restapi.adequateshop.com/api/Tourist',
                        body: requestBody
                    }
                    )
                    .then((response) =>{
                        expect(response.status).to.eq(201)
                        expect(response.body.tourist_name).to.eq("Afsar")
                        expect(response.body.tourist_email).to.eq("Afsar012@gmail.com")
                        expect(response.body.tourist_location).to.eq("USA")
                    })
    })

    it.skip("Appraoch2-Dyanmically generating json object", ()=>{


        const requestBody={

                            tourist_name: Math.random().toString(5).substring(2),
                            tourist_email:  Math.random().toString(5).substring(2)+"@gmail.com",
                            tourist_location: "USA"
                        }

        cy.request(
                    {
                        method: "POST",
                        url: 'http://restapi.adequateshop.com/api/Tourist',
                        body: requestBody
                    }
                    )
                    .then((response) =>{
                        expect(response.status).to.eq(201)
                        expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                        expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                        expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
                    })

    })


    it("Appraoch3-using Fixutre", ()=>{


        cy.fixture('tourist').then((data)=>{
            const requestBody=data;

            cy.request(
                {
                    method: "POST",
                    url: 'http://restapi.adequateshop.com/api/Tourist',
                    body: requestBody
                }
                )
                .then((response) =>{
                    expect(response.status).to.eq(201)
                    expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                    expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                    expect(response.body.tourist_location).to.eq(requestBody.tourist_location)

                    expect(response.body).has.property('tourist_email',requestBody.tourist_email)
                })

        })

        

    })



})