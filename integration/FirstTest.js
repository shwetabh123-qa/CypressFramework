

describe('Tes Suite', () =>

{
    it('Verify Title of Page', () => 
    {
      
cy.visit('https://www.nopcommerce.com/en')
cy.title().should('eq','Free and open-source eCommerce platform. ASP.NET based shopping cart. - nopCommerce')


    })

    it('Verify Title of Page', () => 
    {
      
cy.visit('https://www.nopcommerce.com/en')
cy.title().should('eq','Free and open-source eCommerce platform. ASP.NET based shopping . - nopCommerce')


    })
  })