var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }

  });

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');
  });

  When('I fill a wrong email and password', () => {
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('wrongemail@example.com');

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('123467891')
  });

  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });

  Then('I expect to not be able to login', () => {
    browser.waitForVisible('.aviso.alert.alert-danger', 7000);
  });

  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
     var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)
  });



  When(/^I fill register with (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$/ , (nombre,apellido,correo,password,universidad,departa,terminos) => {
    var cajaSignUp = browser.element('.cajaSignUp');

    var nombreInput = cajaSignUp.element('input[name="nombre"]');
    nombreInput.click();
    nombreInput.keys(nombre);

    var apellidoInput = cajaSignUp.element('input[name="apellido"]');
    apellidoInput.click();
    apellidoInput.keys(apellido)

    var correoInput = cajaSignUp.element('input[name="correo"]');
    correoInput.click();
    correoInput.keys(correo)

    browser.waitForVisible('select', 8000);
    var selectUniversidad =  cajaSignUp.element('select[name="idUniversidad"]');
    selectUniversidad.selectByValue(universidad);

    //browser.click('input[name="acepta"]');
    if(browser.isVisible('input=Estudio una maestria')) {
      browser.click('input=Estudio una maestria');
    }
    browser.waitForVisible('select', 8000);
    var selectPrograma = cajaSignUp.element('select[name="idDepartamento"]');
    //browser.waitForVisible('selectPrograma', 10000);
    selectPrograma.selectByValue(departa);

    var contraInput = cajaSignUp.element('input[name="password"]');
    contraInput.click();
    contraInput.keys(password)
    if (terminos == 'true'){
      browser.click('input[name="acepta"]');
    }
    browser.waitForVisible('button=Registrarse', 10000);

  });

  When('I try to register', () => {
    var cajaLogIn = browser.element('.cajaSignUp');
    cajaLogIn.element('button=Registrarse').click();
  });



  Then(/^I expect to register (.*)$/, (error) => {
    browser.waitForVisible('.sweet-alert ', 8000);
    var alertText = browser.element('.sweet-alert ').getText();
    expect(alertText).to.include(error);
  });

  Then(/^I expect to see (.*)$/, (error) => {
      browser.waitForVisible('.aviso.alert.alert-danger', 5000);
      var alertText = browser.element('.aviso.alert.alert-danger').getText();
      expect(alertText).to.include(error);
  });

});
