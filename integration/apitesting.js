describe('API TESTING', () =>



{

    Cypress.config('baseUrl','http://dummy.restapiexample.com/api/v1')


    it('GET METHOD1', () => 
    {
      
cy.request("http://api.plos.org/search?q=title:DNA").then((res)=>{


expect(res).to.have.property("status",200)
expect(res.body.response).to.have.property("numFound",5443)



})

    })

   

   
it('POST METHOD', () => 
{
    const item={"name":"test","salary":"123","age":"23"}

cy.request('POST','/create',item)
.its('body')
.its('data')
.should('include',{name:'test'})


})


it('PUT METHOD', () => 
{
    const item={"name":"test"}

cy.request({method:'PUT',url:'/update/1',body:item,failOnStatusCode:false})


})




  })