// Positive scenarios
import { TodoPage } from '../../pages/TodoPage';

describe('Todo App - Positive Scenarios', () => {
  const page = new TodoPage();

  beforeEach(() => {
    cy.resetApp();
  });

  it('P1 - Adds a new todo item', () => {
    page.visit();
    page.add('Buy milk');
    cy.getTodoItems().should('have.length', 1);
    cy.assertTodoTexts(['Buy milk']);
  });

  it('P2 - Marks items as completed and shows correct counter', () => {
    page.visit();
    ['Task A', 'Task B', 'Task C'].forEach(t => page.add(t));
    page.toggleAt(0); // complete first
    page.toggleAt(2); // complete third
    page.count().should('contain.text', '1'); // 1 item left
    page.filter('Completed');
    cy.assertTodoTexts(['Task A', 'Task C']);
  });

  it('P3 - Edits an existing todo item', () => {
    page.visit();
    page.add('Old text');
    page.editAt(0, 'New edited text');
    cy.assertTodoTexts(['New edited text']);
  });

  it('P4 - Deletes a todo item', () => {
    page.visit();
    ['Keep me', 'Remove me'].forEach(t => page.add(t));
    page.deleteAt(1);
    cy.getTodoItems().should('have.length', 1);
    cy.assertTodoTexts(['Keep me']);
  });
});
