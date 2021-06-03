import { Character } from ".";

describe("when a new character is created", function() {
  it("Should have health of 1000", function() {
    const character = new Character();
    expect(character.getHealth()).toEqual(1000);
  });

  it("Should have a level of 1", () => {
    const character = new Character();
    expect(character.getLevel()).toEqual(1);
  })

  it("Should be alive", () => {
    const character = new Character();
    expect(character.isAlive()).toEqual(true);
  })
});
