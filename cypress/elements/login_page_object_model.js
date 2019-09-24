export class Login {
    loginIcon = '[data-test-id="user-profile"]';
    name = "input[type = 'text']";
    email = 'input[type="email"]';
    emailInvalidMessage = '[data-testid="email-invalid"]';
    pass = 'input[type="password"]';
    passInvalidMessage = '[data-testid="password-invalid"]';
    wrongCredentials = '[data-testid="wrong-credentials"]';
    loginButton = 'button[class="sign-in-m__submit-btn__26aey sso-wrapper-m__submit-btn__2t6ei"]';
    subscribeButton = '[data-test-id="subscribe"]';
    MyProfile = "user-profile-m__white__2AI0Z";
    subscribePlan = '[data-testid="plans-subscribe-btn"]';
    phoneNumber = "#contact";
    verifyingLogin(element) {
      cy.get(element).click({ force: true });
    }
    verifyingElement(element, text) {
      cy.get(element)
        .contains(text)
        .click({ force: true });
    }
    verifyingInvalidCredentialsMessage(element, text) {
      cy.get(element).contains(text);
    }
  
    verifyingElementVisibility(element, text) {
      cy.get(element).type(text);
    }
    verifyingSubscription(element, text) {
      cy.get(element)
        .contains(text)
        .click({ force: true });
    }
    verifyingFormField(element, text) {
      cy.get(element)
        .clear()
        .type(text);
    }
  }
  