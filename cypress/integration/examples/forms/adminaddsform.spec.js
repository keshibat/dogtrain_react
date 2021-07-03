describe("Successful log in page", () => {
  beforeEach(() => {
    cy.visit("/admin/login");
    cy.get("label.label").contains("Username");
    cy.get('input[name="username"]').type("admin");
    cy.get('input[name="password"]').type("admin");
    cy.get("input.button.is-link").click();
  });

  it("Goes to admin Advert page", () => {
    cy.get("input[placeholder='Add a Heading']").type("add a heading");
    cy.get("textarea[placeholder='Add Content']").type("body post");
    cy.get("input.button.is-link")
      .contains("Update Advert")
      .click();
    cy.visit("/");
    cy.get("h1").contains("add a heading");
  });
});
