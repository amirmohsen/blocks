describe('BaseButton', () => {
  it('works', () => {
    cy.visit('http://localhost:8080/', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log').as('consoleLog');
      },
    });
    const el = cy.get('button[data-test-id="base-button"]');
    el.should('have.text', 'Button Text');
    el.click().then(() => {
      cy.get('@consoleLog').should('be.calledWith', 'Button Clicked');
    });
  });
});
