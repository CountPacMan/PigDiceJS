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

    function printPlayer() {
      $(".play").show();
      $("#ok").hide();
      $("#player-turn").text(currentPlayer.name + "'s turn");
      $("#player-score").text(currentPlayer.score);
      $("#player-turnScore").text(currentPlayer.turnScore);
    }

    printPlayer();
    $("#game").show();

    function changePlayer() {
      currentPlayer.turnScore = 0;
      $("#message").empty();
      $("#player-score").text(currentPlayer.score);
      $("#player-turnScore").text(currentPlayer.turnScore);
      currentPlayer = currentPlayer === player1 ? player2 : player1;
      printPlayer();
    }

    function updateScore() {
      $("#player-score").text(currentPlayer.score);
      $("#player-turnScore").text(currentPlayer.turnScore);
    }

    $("#roll").click(function(event) {
      $("#message").text("");
      var roll = getRoll();
      if (roll === 1) {
        $("#message").text("Rolled a 1! Lose your turn.").addClass("text-danger");
        currentPlayer.turnScore = 0;
        $(".play").hide();
        $("#ok").show();
      } else {
        // need to test for win
        currentPlayer.addTurnScore(roll);
      }
      updateScore();
    });

    $("#pass").click(function(event) {
      currentPlayer.addScore();  // still need to test for win
      updateScore();
      $("#message").text("Adding turn score to total score...");
      $(".play").hide();
      $("#ok").show();
    });

    $("#ok").click(function() {
      changePlayer();
    });
  });
});
