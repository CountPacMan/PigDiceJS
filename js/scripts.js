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

function roll() {
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
    $("#game").show();

  });
});
