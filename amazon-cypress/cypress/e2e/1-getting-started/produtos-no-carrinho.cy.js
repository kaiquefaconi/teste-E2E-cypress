describe('Amazon', () => {
    it('Deve colocar 3 produtos selecionados no carrinho, alterar a quantidade do ultimo produto colocado no carrinho e confirmar a compra', () => {
      cy.visit('https://www.amazon.com.br');
      Cypress.on('uncaught:exception', (err, runnable) => {
        // Impedir que o Cypress falhe o teste devido a esse erro específico
        if (err.message.includes('b.cardModuleFactory is not a function')) {
          return false; // Retornar false impede que o erro falhe o teste
        }
        return true; // Outros erros ainda vão falhar o teste
      });
      cy.get('[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]').click();
      cy.get('._p13n-zg-nav-tree-all_style_zg-browse-group__88fbz > :nth-child(11) > a').click();      
      cy.get('#p13n-asin-index-0 > ._cDEzb_iveVideoWrapper_JJ34T').click();
      cy.get('#newAccordionRow_1 > .a-accordion-row-container > .a-accordion-row-a11y').click();
      cy.get('#add-to-cart-button').click();
      cy.get('#attachSiNoCoverage').click(); 
      cy.get('#sw-gtc > .a-button-inner > .a-button-text').click();
      cy.get('[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]').click();
      cy.get(':nth-child(8) > a').click();
      cy.get('#p13n-asin-index-0 > ._cDEzb_iveVideoWrapper_JJ34T').click();
      cy.get('#add-to-cart-button').click();
      cy.get('[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]').click();
      cy.get('#B097BYXGXN > .aok-block > .a-section').click();
      cy.get('#add-to-cart-button').click();
      cy.get('#sw-gtc > .a-button-inner > .a-button-text').click();
      cy.get('#a-autoid-0-announce').click();
      cy.get('#quantity_4').click();
      cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click();
      
    })
  })