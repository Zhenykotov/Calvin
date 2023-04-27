class Check{
    clickCookie(){
        cy.get('.cookie-notice__actions > .ck-Button__primary').click()

    }
    
    clicksign_in(){
        cy.get('.header-account__sign-in').click()
    }

    inputemail(){
        cy.get('.form-field--logonId > label > .form-field__input-group > [data-testid="input"]').type('kotov@gmail')
        .should('include.value', 'kotov@gmail');
    }

    inputpassword(){
        cy.get('.login-popup__password > label > .form-field__input-group > [data-testid="input"]').type('1234')
    }
    clicklogin(){
        cy.get('.login-popup > form > .ck-Button').click()
    }
    checkerroremail(){
        cy.get('.form-field--logonId > .form-input__error > span').should('have.text','Sorry, dit is geen geldig e-mailadres')
    }
    checkerrorpassword (){
        cy.get('.login-popup__password > .form-input__error > span').should('have.text','Je wachtwoord moet tussen 5 en 20 tekens lang zijn')
    }
    
}

export default Check;