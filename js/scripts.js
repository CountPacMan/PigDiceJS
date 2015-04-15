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

    var name1 = $("#p1").val();
    var player1 = Object.create(Player);
    player1.name = name1;

    var name2 = $("#p2").val();
    var player2 = Object.create(Player);
    player2.name = name2;

    $("#player-turn").text(player1.name + "'s turn");
    $("#player-score").text(player1.score);
    $("#player-turnScore").text(player1.turnScore);
    $("#game").show();

    $("#roll").click(function(event) {
      var roll = getRoll();
      if (roll === 1) {
        player1.turnScore = 0;
        // end turn and give message
      } else {
        player1.addTurnScore(roll);
        player1.addScore();
      }
      $("#player-score").text(player1.score);
      $("#player-turnScore").text(player1.turnScore);
    });
  });
});
