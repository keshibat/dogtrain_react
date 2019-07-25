describe("Booking and appointment success", () => {
  beforeEach(() => {
    cy.visit("/booking");
  });

  it("Goes to the home page", () => {
    cy.get("h1").contains("Book An Appointment");
  });

  it("Booking Form", () => {
    cy.get("div.column.bookForm")
      .get("h2")
      .contains("Enter Your Details:");

    cy.get('input[name="firstName"]').type("john");
    cy.get('input[name="lastName"]').type("doe");
    cy.get('input[name="email"]').type("john@doe.com");
    cy.get('input[name="bookingDate"]').type("25/07/2019");
    cy.get('textarea[name="details"]').type("john doe");
    cy.get("input.button.is-link").click();
    cy.get("div.notification.is-link").contains(
      "Your booking has been sent and will be reviewed by our trainers. We will be in contact with you shortly."
    );
  });
});
