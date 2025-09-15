// Negative scenarios
import { TodoPage } from '../../pages/TodoPage';

describe('Todo App - Negative Scenarios', () => {
  const page = new TodoPage();

  beforeEach(() => {
    cy.resetApp();
  });

  it('N1 - Do not accept duplicate todos', () => {
    page.visit();
    page.add('Buy milk');
    page.add('Buy milk');
    cy.getTodoItems().should('have.length', 1);
  });

  it('N2 - Do not allow overly long todos', () => {
    page.visit();
    const longText = 'a'.repeat(201); // >200 chars
    page.add(longText);
    cy.getTodoItems().should('have.length', 0);
  });

  it('N3 - Editing a todo to empty does not overwrite it', () => {
    page.visit();
    page.add('Keep me');
    cy.get('.todo-list li').first().find('label').dblclick();
    cy.get('.todo-list li').first().find('.edit').clear().type('{enter}');
    cy.assertTodoTexts(['Keep me']);
  });

  it('N4 - Do not delete a todo without user action', () => {
    page.visit();
    page.add('Task to keep');
    cy.assertTodoTexts(['Task to keep']);
  });
});
