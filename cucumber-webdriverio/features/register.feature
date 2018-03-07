Feature: Registro en losestudiantes
    As an user I want to register myself within losestudiantes website in order to rate teachers

Scenario Outline: Registro failed with wrong inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill register with <nombre> and <apellido> and <correo> and <password> and <universidad> and <departa> and <terminos>
    And I try to register
    Then I expect to see <error>

    Examples:
      | nombre   | apellido | correo             | universidad              |  departa  |   password  | terminos |error |
      | pepito   |  perez   | pepito@gmail.com   | universidad-externado-de-colombia | 1500  |         |   true | Ingresa una contraseña  |
      | pepito   |  perez   |                    | universidad-de-los-andes | 15        | pepitotest5 | true | Ingresa tu correo  |
      | pepito   |  perez   |                    | universidad-de-los-andes | 15        | pepitotest5 | false | Debes aceptar los términos y condiciones  |

  Scenario Outline: Registro failed with existent users

    Given I go to losestudiantes home screen
      When I open the login screen
      And I fill register with <nombre> and <apellido> and <correo> and <password> and <universidad> and <departa> and <terminos>
      And I try to register
      Then I expect to register <error>

      Examples:
        | nombre   | apellido | correo             | universidad              |  departa  |   password  | terminos | error |
        | pepito   |  perez   | pepito@gmail.com   | universidad-externado-de-colombia | 1500 | pepitotest5 | true | Ya existe un usuario  |
