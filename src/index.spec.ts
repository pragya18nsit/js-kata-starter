import { Character, systemUnderTest } from ".";

describe("Test of systemUnderTest()", function() {
  it("Should pass", function() {
    expect(systemUnderTest()).toEqual(true);
  });
});


describe("when a new character is created", function() {
  it("Should have health of 1000", function() {
    const character = new Character();
    expect(character.getHealth()).toEqual(1000);
  });
});