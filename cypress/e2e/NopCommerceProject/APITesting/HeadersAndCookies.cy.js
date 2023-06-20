
describe('API Testing',()=>{


    let authToken=null;

    before('creating accesss token',()=>{

            cy.request({
                    method: 'POST',
                    url: "https://simple-books-api.glitch.me/api-clients/", 
                    headers: {
                            'Content-Type': 'application/json'
                            },
                    body:{
                            clientName: 'ABC',
                            clientEmail: Math.random().toString(5).substring(2)+'@gmail.com'
                    }
            }).then((response)=>{
                    authToken=response.body.accessToken;
            });
    });

    it('creating new order',()=>{

        cy.request({
                method: 'POST',
                url: "https://simple-books-api.glitch.me/orders/", 
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer'+authToken
                        },
                body:{
                        "bookId": 2,
                        "customerName": "okplxyzabc"
                    }
        }).then((response)=>{
                

                expect(response.status).to.eq(201);
                expect(response.body.created).to.eq(true);
        });
});




})