describe('PigDice', function() {
  describe('addScore()', function() {
    it("adds 3 to the player's score", function() {
      var testPlayer = Object.create(Player);
      testPlayer.score = 2;
      testPlayer.turnScore = 3;
      testPlayer.addScore();
      expect(testPlayer.score).to.equal(5);
    });
  });

  describe('addScore() winner', function() {
    it("adds 100 to the player's score and returns winner", function() {
      var testPlayer = Object.create(Player);
      testPlayer.score = 1;
      testPlayer.turnScore = 100;
      var winner = testPlayer.addScore();
      expect(winner).to.equal(true);
    });
  });

  describe('addTurnScore()', function() {
    it("adds 2 to the player's turn score", function() {
      var testPlayer = Object.create(Player);
      testPlayer.turnScore = 3;
      testPlayer.addTurnScore(2);
      expect(testPlayer.turnScore).to.equal(5);
    });
  });
});
