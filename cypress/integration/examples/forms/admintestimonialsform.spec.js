describe("Successful log in page", () => {
  beforeEach(() => {
    cy.visit("/admin/login");
    cy.get("label.label").contains("Username");
    cy.get('input[name="username"]').type("admin");
    cy.get('input[name="password"]').type("admin");
    cy.get("input.button.is-link").click();
  });

  it("Goes to admin Testimonials page", () => {
    cy.get("input[placeholder='Add Testimonial Title']").type(
      "testimonial test"
    );
    cy.get("textarea[placeholder='Add Testimonial']").type(
      "testimonial body post"
    );
    cy.get("input.button.is-link")
      .contains("Add Testamonial")
      .click();
  });
});
