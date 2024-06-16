class login

{

    txtUserName="input[name='username']";
    txtPassword="input[name='password']";
    btnSubmit="button[type='submit']";


    setusername(username)
    {

     cy.get(this.txtUserName).type(username)

    }

    setpassword (password)
    {
       cy.get(this.txtPassword).type(password)

    }

    clicksingInButton()
    {

        cy.get(this.btnSubmit).click()


    }

   verifyTitle () 
    {

cy.title().should('eq','OrangeHRM')


    }
}
export default login