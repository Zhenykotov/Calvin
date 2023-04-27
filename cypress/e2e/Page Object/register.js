class Register
{
    clickCookie(){
        cy.get('.cookie-notice__actions > .ck-Button__primary').click()
    }
    signin(){
        cy.get('.header-account__sign-in').click()
    }
    clickregister(){
        cy.get('.register-popup > [data-qa]').click()
    }
    inputmaill(){
        cy.get('.form-field--email1 > label > .form-field__input-group > [data-testid="input"]').type('vanewi4805@syinxun.com')
    }
    inputpassword(){
        cy.get('.form-field--textInput > label > .form-field__input-group > [data-testid="input"]').type('Qwerty300!')
    }
    confirmpassword(){
        cy.get('.register-popup__confirm > label > .form-field__input-group > [data-testid="input"]').type('Qwerty300!')
    }
    signup1(){
    cy.get('.form-field--signUpForTermsCondition > .ck-Checkbox > .ck-Checkbox__label').click()
    }
    signup2(){
        cy.get('.form-field--registerNewsletter > .ck-Checkbox > .ck-Checkbox__label').click()
    }
    clickbuttonregister(){
        cy.get('.register-popup > form > .ck-Button').click()
    }

}
export default Register;