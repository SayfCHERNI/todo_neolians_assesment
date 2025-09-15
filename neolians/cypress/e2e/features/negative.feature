Feature: Todo App - Negative Scenarios
  As a user of the Todo App
  I want to prevent invalid or unwanted actions
  So that my list stays consistent

  Background:
    Given the Todo App
    And I open the Todo App

  Scenario: N1 - Do not accept duplicate todos
    When I add a todo "Buy milk"
    And I add a todo "Buy milk"
    Then I should see only 1 todo item

  Scenario: N2 - Do not allow overly long todos
    When I add a todo with more than 200 characters
    Then I should see 0 todo items

  Scenario: N3 - Editing a todo to empty does not overwrite it
    When I add a todo "Keep me"
    And I edit todo at position 0 to ""
    Then I should still see the following todos:
      | text   |
      | Keep me |

Scenario: N4 - Do not delete a todo without user action
  When I add a todo "Task to keep"
  Then I should still see the following todos:
    | text        |
    | Task to keep |
