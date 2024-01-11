before(function () {
cy.visit('https://automationintesting.online/');
const firstNameElement = cy.get(".room-firstname")
const lastNameElement = cy.get(".room-lastname")
const emailElement = cy.get(".room-email")
const phone = cy.get(".room-phone")
}
)

beforeEach(() => cy.visit('https://automationintesting.online/'));

describe('Booking a room', () => {
  it('should let me to book a room with the corretct data', () => {
    // given
    const fistName = "Joe";
    const lastName = "Doe";
    const email = "JoeDoe@example.com";
    const phone = "1234567899";

    const firstNameElement = .type(fistName);
    // when

    //then
  });
});
