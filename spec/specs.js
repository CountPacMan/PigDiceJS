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
});
