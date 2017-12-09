var games = []
var gamesForm = document.getElementById("game-form");

gamesForm.addEventListener("submit", function(event) {
  event.preventDefault();

  for (var i = 0; i < (gamesForm.length - 1); i++) {
    games.push(gamesForm[i].value);
  }

  console.log(games);

  randomizedGames = games.sort(function() { return 0.5 - Math.random() });

  console.log(randomizedGames);

  games.forEach(function(game, index) {
    document.getElementById("top-" + (index + 1)).innerHTML = game;
  })

  games = [];
});
