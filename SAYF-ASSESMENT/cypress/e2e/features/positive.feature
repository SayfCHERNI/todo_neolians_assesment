Feature: Todo App - Positive Scenarios
  As a user of the Todo App
  I want to manage my todos
  So that I can keep track of my tasks

  Background:
    Given the Todo App 
    And I open the Todo App

  Scenario: P1 - Adds a new todo item
    When I add a todo "Buy milk"
    Then I should see 1 todo item
    And I should see the following todos:
      | text     |
      | Buy milk |

  Scenario: P2 - Marks items as completed and shows correct counter
    When I add the following todos:
      | text    |
      | Task A  |
      | Task B  |
      | Task C  |
    And I mark todo at position 0 as completed
    And I mark todo at position 2 as completed
    Then the counter should show "1"
    When I filter by "Completed"
    Then I should see the following todos:
      | text   |
      | Task A |
      | Task C |

  Scenario: P3 - Edits an existing todo item
    When I add a todo "Old text"
    And I edit todo at position 0 to "New edited text"
    Then I should see the following todos:
      | text            |
      | New edited text |

  Scenario: P4 - Deletes a todo item
    When I add the following todos:
      | text      |
      | Keep me   |
      | Remove me |
    And I delete todo at position 1
    Then I should see 1 todo item
    And I should see the following todos:
      | text    |
      | Keep me |
