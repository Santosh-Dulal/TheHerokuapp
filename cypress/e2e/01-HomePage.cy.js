describe('Heroko App', () => {
    beforeEach(()=>{
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
         cy.visit('/')
    })
   
    it('Verify the url and title bar text', () => {
       cy.url().should('eq','https://the-internet.herokuapp.com/')  
       cy.title().should('eq','The Internet')
    })
    
    it('Verify the page heading text', () => {
      cy.contains('h1','Welcome to the-internet')  
    })

    it('Verify the page sub-heading text', () => {
        cy.contains('h2','Available Examples')
    })

    it('Verify the number of examples listed', () => {
        cy.get('#content>ul>li').should('have.length', 44)
        
    })
})