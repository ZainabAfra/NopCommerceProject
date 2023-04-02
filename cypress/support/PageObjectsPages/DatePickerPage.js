
class DatePickerPage{
    getDatePickerInput(){
        return cy.get("//input[@id='StartDateUtc']");
    }

    selectRandomDate(){
    const date = new Date(2022, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
    const dateString = date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    cy.datepicker(this.getDatePickerInput(), dateString);

    }
}

export default new DatePickerPage()