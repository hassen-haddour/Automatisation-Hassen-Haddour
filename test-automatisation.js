var email = 'hassen.haddour70@gmail.com';
var password = 'password123';
var firstname = 'hassen';
var lastname = 'haddour';
var address = '8 boulevard de stalingrad';
var postcode = '94320';
var num = '1234567'

describe('suite test', () => {
    it('Step1', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').first().click()
        cy.get('#email_create').type('bad-email')
        cy.get('#SubmitCreate').focus()
        cy.get('#email_create').parent().should('have.class', 'form-error')
    })

    it('Step2', () => {
        cy.get('#email_create').clear() 
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate').focus()
        cy.get('#email_create').parent().should('have.class', 'form-ok')
    })

    it('Step3', () => {
        cy.get('#SubmitCreate').click()
        cy.get('#customer_firstname').type(firstname)
        cy.get('#customer_lastname').type(lastname)
        cy.get('#passwd').type(password)
        cy.get('#firstname').type(firstname)
        cy.get('#lastname').type(lastname)
        cy.get('#address1').type(address)
        cy.get('#city').type('New York')
        cy.get('#postcode').type(postcode)
        // cy.get('#phone_mobile').type(num)

        cy.get('#id_state').select('5')  
        cy.get('#submitAccount').click()
        cy.get('div.alert-danger').should('be.visible')
    })
    it('Step4', () => {
        cy.get('#passwd').type(password)
        cy.get('#phone_mobile').type(num)
        cy.get('#submitAccount').click()
        cy.get('a.account').should('be.visible'); // vérifier le nom d'utilisateur
    })
    it('Step5', () => {
        cy.get('a').get('[title="Orders"]').should('be.visible')
        cy.get('a').get('[title="Credit slips"]').should('be.visible')
        cy.get('a').get('[title="Addresses"]').should('be.visible')
        cy.get('a').get('[title="Information"]').should('be.visible')
        cy.get('a').get('[title="My wishlists"]').should('be.visible') 
    })
    it('Step6', () => {
        cy.get('[title="Information"]').click()
        cy.get('#firstname').should('have.value', firstname) // vérifier valeur d'un input
        cy.get('#lastname').should('have.value', 'haddour')
        cy.get('#email').should('have.value', email)
    })
    it('Step7', () => {
        cy.get('.login').click()
        cy.get('#email').type(email)
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin').click()
        cy.get('[title="Information"]').click()
        cy.get('#firstname').should('have.value', firstname) 
        cy.get('#lastname').should('have.value', lastname)
        cy.get('#email').should('have.value', email)
        cy.get('#old_passwd').type(password)
        cy.get('[name="submitIdentity"]').click()
        cy.get('p.alert-success').should('be.visible').contains(' Your personal information has been successfully updated.')

    })
    it('Step8', () => {
        cy.get('.logout').click()
        cy.get('.login').click()
        cy.get('#email').type(email)
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin').click()
        cy.get('a.account').should('be.visible'); 



    })
})