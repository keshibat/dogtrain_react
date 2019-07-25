describe("Successful log in page", () => {
  beforeEach(() => {
    cy.visit("/admin/login");
  });

  it("Goes to admin page and logs in", () => {
    cy.get("label.label").contains("Username");
    cy.get('input[name="username"]').type("admin");
    cy.get('input[name="password"]').type("admin");
    cy.get("input.button.is-link").click();
  });
});
