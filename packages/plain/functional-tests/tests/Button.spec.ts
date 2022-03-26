describe('BaseButton', () => {
  it('works', () => {
    cy.findStory('plain-button--default');
    const el = cy.get('button[data-test-id="plain-button-default"]');
    el.should('have.text', 'Plain Button');
    el.click().then(() => {
      cy.get('@consoleLog').should('be.calledWith', 'Plain Button Clicked');
    });
  });
});
