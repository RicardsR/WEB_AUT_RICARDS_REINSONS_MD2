class Appointment {
    static get facility() {
        return cy.get('#combo_facility');
    }

    static get hospitalReadmission() {
        return cy.get('#chk_hospotal_readmission');
    }

    static get medicare() {
        return cy.get('#radio_program_medicaid');
    }

    static get date() {
        return cy.get('#txt_visit_date');
    }

    static get datePick30() {
        return cy.get('.datepicker-days > .table-condensed > tbody > :nth-child(5) > :nth-child(6)');
    }

    static get comment() {
        return cy.get('#txt_comment');
    }

    static get bookAppointmentButton() {
        return cy.get('#btn-book-appointment');
    }

    static get facilityValue() {
        return cy.get('#facility');
    }

    static get hospitalReadmissionValue() {
        return cy.get('#hospital_readmission');
    }

    static get medicareValue() {
        return cy.get('#program');
    }

    static get dateValue() {
        return cy.get('#visit_date');
    }

    static get commentValue() {
        return cy.get('#comment');
    }

    static get menuToggle() {
        return cy.get('#menu-toggle');
    }

    static get sidebarWrapper() {
        return cy.get('#sidebar-wrapper');
    }

    static get history() {
        return cy.get('.sidebar-nav > :nth-child(4) > a');
    }

    static get noAppointment() {
        return cy.get('#history > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(3)');
    }
}

export default Appointment;