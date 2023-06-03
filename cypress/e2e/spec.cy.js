import Login from '../pageObjects/login.page.js';
import Appointment from '../pageObjects/appointment.page.js';

describe('Katalon Demo Cura', () => {
    beforeEach(() => {
        Login.visit();
        Login.loginto('John Doe', 'ThisIsNotAPassword');
    });
    context('Appointments', () => {
        it('Make an Appointment', () => {
            Appointment.facility.select('Seoul CURA Healthcare Center');
            Appointment.hospitalReadmission.click();
            Appointment.medicare.click();
            Appointment.date.click();
            Appointment.datePick30.click();
            Appointment.comment.type('CURA Healthcare Service');
            Appointment.bookAppointmentButton.click();
            Appointment.facilityValue.should('have.text', 'Seoul CURA Healthcare Center');
            Appointment.hospitalReadmissionValue.should('have.text', 'Yes');
            Appointment.medicareValue.should('have.text', 'Medicaid');
            Appointment.dateValue.should('have.text', '30/' + (new Date().getMonth() + 1).toString().padStart(2, '0') + '/' + new Date().getFullYear()); //Using JS to get current month and year
            Appointment.commentValue.should('have.text', 'CURA Healthcare Service');
        });
        it('Appointment history empty', () => {
            Appointment.menuToggle.click();
            Appointment.sidebarWrapper.should('be.visible');
            Appointment.history.click();
            Appointment.noAppointment.should('have.text', 'No appointment.');
            Appointment.noAppointment.should('be.visible');
        });
    });
});