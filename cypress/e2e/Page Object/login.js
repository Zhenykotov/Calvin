class Login{
    clickcookie(){
    cy.get('.cookie-notice__actions > .ck-Button__primary').click()
    }
    singin(){
    cy.get('.header-account__sign-in').click()
    }
    inputemaill(){
        cy.get('.form-field--logonId > label > .form-field__input-group > [data-testid="input"]')
        .type('vanewi4805@syinxun.com')

    }
    inputpassword(){
        cy.get('.login-popup__password > label > .form-field__input-group > [data-testid="input"]')
        .type('Qwerty18!')
    }
    clickbutton(){
        cy.get('.login-popup__secondary-action-send').click()
    }

}
export default Login;