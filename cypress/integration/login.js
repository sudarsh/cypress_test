import { Login } from "../elements/login_page_object_model";

const login = new Login();

describe("Verifying Login button on homepage", function() {
  beforeEach(function() {
    // Cookies are cleared upon each test. Please preserve cookies for further actions..
    Cypress.Cookies.preserveOnce("session-cookie", "thinmint");
  });

  it("Verifying Login", function() {
    cy.visit("/");
    login.verifyingLogin(login.loginIcon);
  });

  it("Verifying login with wrong credentials", function() {
    login.verifyingElementVisibility(login.email, "calacenu@royalhost.in");
    login.verifyingElementVisibility(login.pass, "000000");
    login.verifyingElement(login.loginButton, "Sign in");
    login.verifyingInvalidCredentialsMessage(login.wrongCredentials, "Wrong credentials");
  });

  it("Verifying login form ", function() {
    login.verifyingFormField(login.email, "calacenu@royalhost.info");
    login.verifyingFormField(login.pass, "0000");
    login.verifyingElement(login.loginButton, "Sign in");
    cy.wait(3000);
  });
});