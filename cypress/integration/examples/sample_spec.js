describe('My First Test', () => {
    it('finds the content "type"', () => {
      cy.visit('http://localhost:4200/')
  
      cy.contains('List your plate for FREE').click()

      cy.url().should('include', 'create-listing')

      cy.get('.action-plate')
      .type('1 51NGH')
      .should('have.value', '1 51NGH')
    })
  })