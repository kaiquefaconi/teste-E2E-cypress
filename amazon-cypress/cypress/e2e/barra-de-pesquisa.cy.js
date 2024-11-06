describe('Amazon black friday', () => {
    it('Deve colocar 3 produtos selecionados no carrinho e confirmar a compra', () => {
      cy.visit('https://www.amazon.com.br');
      Cypress.on('uncaught:exception', (err, runnable) => {
        // Impedir que o Cypress falhe o teste devido a esse erro específico
        if (err.message.includes('b.cardModuleFactory is not a function')) {
          return false; // Retornar false impede que o erro falhe o teste
        }
        return true; // Outros erros ainda vão falhar o teste
      });
      cy.get("#twotabsearchtextbox").type('Xbox one{enter}');
      
    })
  })