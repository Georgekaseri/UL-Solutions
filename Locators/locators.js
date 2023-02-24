import "cypress-xpath";

describe("Ul Solution", () => {
  it("Careers Locators", () => {
    cy.visit("https://www.ul.com/");
    cy.get("footer[class='footer'] li:nth-child(1) span:nth-child(1)").should(
      "be.visible"
    );
    cy.xpath("//*[@title='Working at UL Solutions']").should("be.visible");
    cy.get("a[title='Global Job Search ']").should("be.visible");
    cy.xpath("//*[@title='US Job Search']").should("be.visible");

    cy.get(".menu-item-no-link").first().should("be.visible");
  });

  it("Help and Support Locators", () => {
    cy.visit("https://www.ul.com/");
    cy.xpath("//*[@class='menu-item-no-link'][.='Help and Support']").should(
      "be.visible"
    );
    cy.xpath("//*[@title='Help Center ']").should("be.visible");
    cy.xpath("//*[@title='Tools, Apps and Databases ']").should("be.visible");
    cy.xpath("//*[@href='/resources/market-surveillance-departments']").should(
      "be.visible"
    );
  });

  it("Contact Center Locators", () => {
    cy.visit("https://www.ul.com/");
    cy.xpath("//*[@class='menu-item-no-link'][.='Contact Center']").should(
      "be.visible"
    );
    cy.get("a[title='Contact Us']").should("be.visible");
    cy.xpath("//*[text()='Manage Your Subscriptions ']").should("be.visible");
    cy.xpath("//a[@title='Locations ']").should("be.visible");
  });
});
