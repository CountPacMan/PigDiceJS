var Player = {
  name: null,
  score: 0,
  turnScore: 0,

  addScore: function() {
    // add score
    this.score += this.turnScore;
    // test for win
    return this.score >= 100;
  },

  addTurnScore: function(score) {
    this.turnScore += score;
  }
};

function getRoll() {
  // roll dice 1d6
  return Math.floor(Math.random() * 6) + 1;
};

jQuery(document).ready(function() {
  $("#p1").focus();
  $("#create-players").submit(function(event) {
    event.preventDefault();
    $("#create-players").hide();

    var name1 = $("#p1").val();
    var player1 = Object.create(Player);
    player1.name = name1;

    var name2 = $("#p2").val();
    var player2 = Object.create(Player);
    player2.name = name2;

    var currentPlayer = player1;

    $("#player-turn").text(currentPlayer.name + "'s turn");
    $("#player-score").text(currentPlayer.score);
    $("#player-turnScore").text(currentPlayer.turnScore);
    $("#game").show();

    $("#roll").click(function(event) {
      $("#message").text("");
      var roll = getRoll();
      if (roll === 1) {
        currentPlayer.turnScore = 0;
        // end turn and give message
        $("#message").text("Rolled a 1! Lose your turn.")
      } else {
        currentPlayer.addTurnScore(roll);
      }
      $("#player-score").text(currentPlayer.score);
      $("#player-turnScore").text(currentPlayer.turnScore);
    });

    $("#pass").click(function(event) {
      $("#message").text("Adding turn score to total score...");
      currentPlayer.addScore();  // still need to test for win
      $("#player-score").text(currentPlayer.score);
      $("#player-turnScore").text(currentPlayer.turnScore);
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    });
  });
});
