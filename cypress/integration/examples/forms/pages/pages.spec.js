describe("Pages", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Goes to the home page", () => {
    cy.get("h1").contains("Expert Dog Training");
  });
});

describe("Puppy Page", () => {
  beforeEach(() => {
    cy.visit("/puppy");
  });

  it("Goes to the puppy page", () => {
    cy.get("h1").contains("In-Home Puppy Training (from just 8 weeks of age!");
  });
});

describe("Areas we service Page", () => {
  beforeEach(() => {
    cy.visit("/areasweservice");
  });

  it("Goes to the home page", () => {
    cy.get("h1").contains("Areas We Service");
  });
});

describe("Goes to the FAQ page", () => {
  beforeEach(() => {
    cy.visit("/faq");
  });

  it("Goes to the FAQ page", () => {
    cy.get("h1").contains("Frequently asked Questions");
  });
});

describe("Goes to the Accomodation page", () => {
  beforeEach(() => {
    cy.visit("/accomodation");
  });

  it("Goes to the FAQ page", () => {
    cy.get("h1").contains("Dog Friendly Accomodation");
  });
});

describe("Goes to the pet sitting page", () => {
  beforeEach(() => {
    cy.visit("/petsitting");
  });

  it("Goes to the pet sitting page", () => {
    cy.get("h1").contains("Pet Sitting and Live-In Dog Training Programs");
  });
});

describe("About me page", () => {
  beforeEach(() => {
    cy.visit("/aboutme");
  });

  it("Goes to the about me page", () => {
    cy.get("h1").contains("About Us");
  });
});

describe("Naughty Dogs", () => {
  beforeEach(() => {
    cy.visit("/naughty");
  });

  it("Goes to the about me page", () => {
    cy.get("h1").contains("Private In-Home Dog Behaviour Training");
  });
});

describe("Fearful Dogs", () => {
  beforeEach(() => {
    cy.visit("/feaful");
  });

  it("Goes to the about fearful page", () => {
    cy.get("h1").contains("Specialists in fearful and reactive dogs");
  });
});

describe("Rescued Dogs Page", () => {
  beforeEach(() => {
    cy.visit("/rescued");
  });

  it("Goes to the Rescue page", () => {
    cy.get("h1").contains(
      "Training and Rehabilitation for Rescued Dogs, Re-homed Dogs and Adopted Dogs - Private Training"
    );
  });
});

describe("Apartment Dogs", () => {
  beforeEach(() => {
    cy.visit("/apartment");
  });

  it("Goes to the Apartment page", () => {
    cy.get("h1").contains("Private, In-Home Dog Training and Obedience.");
  });
});

describe("New Family Memeber", () => {
  beforeEach(() => {
    cy.visit("/newfamilymember");
  });

  it("Goes to the New Family member page", () => {
    cy.get("h1").contains(
      "In-Home Dog Training to Introduce a New Family Member"
    );
  });
});

describe("Obedience", () => {
  beforeEach(() => {
    cy.visit("/obedience");
  });

  it("Obedience page", () => {
    cy.get("h1").contains("Personal Dog Obedience Training");
  });
});

describe("Advanced Dog Training", () => {
  beforeEach(() => {
    cy.visit("/advanced");
  });

  it("Obedience page", () => {
    cy.get("h1").contains("Advanced Private Dog Obedience & Trick Training");
  });
});

describe("Booking Page", () => {
  beforeEach(() => {
    cy.visit("/booking");
  });

  it("Obedience page", () => {
    cy.get("h1").contains("Book An Appointment");
  });
});

describe("Blog", () => {
  beforeEach(() => {
    cy.visit("/blog");
  });
});

describe("Contact Us", () => {
  beforeEach(() => {
    cy.visit("/contactus");
  });

  it("Contact Us Page", () => {
    cy.get("h1").contains("Contact Us");
  });
});
