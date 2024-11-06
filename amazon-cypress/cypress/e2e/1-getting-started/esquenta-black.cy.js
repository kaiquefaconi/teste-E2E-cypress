describe('Amazon black friday', () => {
  it('Deve adquirirum produto na aba de todas as ofertas dentro de esquenta black friday', () => {
    cy.visit('https://www.amazon.com.br');
    cy.contains('a', 'Esquenta Black Friday').click();
    cy.get('[data-testid="filter-bubble-deals-todasofertas"]').click();
    cy.get('[data-testid="filter-departments-18991080011"] > label > .a-label > .a-size-base').click();
    cy.get('[data-testid="B07HDSL78H"]').click();
    cy.get('#a-autoid-1-announce').click();
    cy.get('#rcxsubsQuan_3').click();
    cy.get('#rcx-subscribe-submit-button-announce').click();
    cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click();
  })
})