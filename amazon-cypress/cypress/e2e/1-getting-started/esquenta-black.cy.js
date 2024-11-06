describe('Amazon black friday', () => {
  it('Deve adquirirum produto na aba de todas as ofertas dentro de esquenta black friday', () => {
    cy.visit('https://www.amazon.com.br');
    cy.contains('a', 'Esquenta Black Friday').click();
    cy.get('[data-testid="filter-bubble-deals-todasofertas"]').click();
    cy.get('[data-testid="filter-departments-18991080011"] > label > .a-label > .a-size-base').click();
    cy.get('[data-testid="B001P4SEXA"]').click();
    cy.get('#a-autoid-0-announce').click();
    cy.get('#quantity_4').click();
    cy.get('#buy-now-button').click();
    
  })
})