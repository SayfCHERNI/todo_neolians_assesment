export class TodoPage {
  visit() { cy.visit('/'); }
  newTodo() { return cy.get('.new-todo'); }
  list() { return cy.get('.todo-list'); }
  items() { return cy.get('.todo-list li'); }
  clearCompleted() { return cy.get('.clear-completed'); }
  
  add(text) { cy.addTodo(text); }
  toggleAt(i) { cy.toggleTodoAt(i); }
  deleteAt(i) { cy.deleteTodoAt(i); }
  
  editAt(i, text) {
    cy.get('.todo-list li').eq(i).find('label').dblclick();
    cy.get('.todo-list li').eq(i).find('.edit').clear().type(`${text}{enter}`);
  }

  count() { return cy.get('.todo-count'); }
  filter(name) { cy.contains('a', name).click(); }
}
