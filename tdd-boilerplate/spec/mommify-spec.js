describe("Mommify",function() {

  it("should return h when given h",function() {
    var inputStr = "h",
        expectedResult = "h";
    var result = mommify(inputStr);
    expect(result).toEqual(expectedResult);

  });

  it("should return m when given m", function() {
    var inputStr = "m",
        expectedResult = "m";
    var result = mommify(inputStr);
    expect(result).toEqual(expectedResult);
  });

  it("should return mommy when given vowel",function() {
    var inputList = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        expectedResult = "mommy";
    inputList.forEach(function(e) {
      var result = mommify(e);
      expect(result).toEqual(expectedResult);
    });
  });

  it("should return ship when given ship", function() {
    var inputStr = "ship",
        expectedResult = "ship";
    var result = mommify(inputStr);
    expect(result).toEqual(expectedResult);
  });

  it("should return shmommyshmommy when given sheshe", function() {
    var inputStr = "sheshe",
        expectedResult = "shmommyshmommy";
    var result = mommify(inputStr);
    expect(result).toEqual(expectedResult);
  });

  it("should return hmommymommyr when given hear", function() {
    var inputStr = "hear",
        expectedResult = "hmommymommyr";
    var result = mommify(inputStr);
    expect(result).toEqual(expectedResult);
  });

});
