class Login {
    static get url() {
        return 'https://katalon-demo-cura.herokuapp.com/';
    }

    static visit() {
        return cy.visit(this.url);
    }

    static get username() {
        return cy.get('#txt-username');
    }

    static get password() {
        return cy.get('#txt-password');
    }

    static get loginButton() {
        return cy.get('#btn-login');
    }

    static get makeAppointmentButton() {
        return cy.get('#btn-make-appointment');
    }

    static loginto(username, password) {
        this.makeAppointmentButton.click();
        this.username.type(username);
        this.password.type(password);
        this.loginButton.click();
    }
}

export default Login;