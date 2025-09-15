
Cypress.Commands.add('resetApp', () => {
  cy.clearLocalStorage();
  cy.visit('/');
});

Cypress.Commands.add('addTodo', (text) => {
  cy.get('.new-todo').type(`${text}{enter}`);
});

Cypress.Commands.add('getTodoItems', () => {
  return cy.get('.todo-list li');
});

Cypress.Commands.add('toggleTodoAt', (index) => {
  cy.get('.todo-list li').eq(index).find('.toggle').click();
});

Cypress.Commands.add('deleteTodoAt', (index) => {
  cy.get('.todo-list li').eq(index).trigger('mouseover');
  cy.get('.todo-list li').eq(index).find('.destroy').click({ force: true });
});

Cypress.Commands.add('editTodoAt', (index, newText) => {
  cy.get('.todo-list li').eq(index).find('label').dblclick();
  if (newText) {
    cy.get('.todo-list li').eq(index).find('.edit').clear().type(`${newText}{enter}`);
  } else {
    cy.get('.todo-list li').eq(index).find('.edit').clear().type('{enter}');
  }
});


Cypress.Commands.add('filterAll', () => {
  cy.contains('a', 'All').click();
});

Cypress.Commands.add('filterActive', () => {
  cy.contains('a', 'Active').click();
});

Cypress.Commands.add('filterCompleted', () => {
  cy.contains('a', 'Completed').click();
});

Cypress.Commands.add('assertTodoTexts', (expected) => {
  cy.get('.todo-list li label').then($labels => {
    const texts = [...$labels].map(el => el.textContent.trim());
    expect(texts).to.deep.equal(expected);
  });
});
