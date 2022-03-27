Cypress.Commands.add('findStory', (story: string) => {
  cy.visit(`/iframe?id=${story}`, {
    onBeforeLoad(win) {
      cy.stub(win.console, 'log').as('consoleLog');
    },
  });
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      findStory(story: string): Chainable<Element>;
    }
  }
}

export {};
