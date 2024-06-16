/// <reference types="Cypress"/>

import Login from '../PageObjects/LoginPage'



describe('pom', () =>

{
before ("Visit Orangehrm",()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})


//using pom with fixture
it('Login Test1 ', () => 
 {
      

cy.fixture('example').then((data)=>{
const login =new Login ()
login.setusername(data.username)
login.setpassword(data.password)
login.clicksingInButton()

})
})

it('Login Test2 ', () => 
 {


const login =new Login ()


login.verifyTitle()
})



  })