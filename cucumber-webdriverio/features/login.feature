Feature: Login into losestudiantes
    As an user I want to authenticate myself within losestudiantes website in order to rate teachers

Scenario Outline: Login failed with wrong inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <email> and <password>
    And I try to login
    Then I expect to see <error>

    Examples:
      | email            | password | error                    |
      | dp.espitia@uniandes.edu.co   |          | Ingresa una contraseña   |
      | miso@gmail.com   |    1234  | Upss! El correo y        |

Scenario Outline: Login exitoso

    Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <email> and <password>
    And I try to login

    Examples:
      | email            | password |
      | dp.espitia@uniandes.edu.co   |    pruebataller2      |
