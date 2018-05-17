    var character = {};
    var defender = {};
    var characterSelected = false;
    var defenderSelected = false;
    var enemiesDefeated = 0;
    gameOver = false;

    var Thor = {
        name: "Thor",
        health: 280,
        attack: 21,
        counterAttack: 18
        }



var CaptainAmerica = {
        name: "Captain America",
        health: 220,
        attack: 12,
        counterAttack: 15
        }

var Hulk = {
        name: "Hulk",
        health: 240,
        attack: 16,
        counterAttack: 5
        }

var IronMan = {
        name: "Iron Man",
        health: 230,
        attack: 19,
        counterAttack: 20
        }




    function initializeCharacter(selectedCharacter) {
        character.name = selectedCharacter.name;
        character.health = selectedCharacter.health;
        character.attack = selectedCharacter.attack;
        character.counterAttack = selectedCharacter.counterAttack;
    }
    
    
    function initializeDefender(selectedDefender) {
        defender.name = selectedDefender.name;
        defender.health = selectedDefender.health;
        defender.attack = selectedDefender.attack;
        defender.counterAttack = selectedDefender.counterAttack;
    }


    function moveToEnemies() {
        $(".available-character").removeClass("available-character").addClass("enemy-character");
        $("#enemies-available").append($(".enemy-character"));
      }

    function resetGame() {
        $("#Captain-America").children(".health").html(CaptainAmerica.health);
        $("#Hulk").children(".health").html(Hulk.health);
        $("#Iron-Man").children(".health").html(IronMan.health);
        $("#Thor").children(".health").html(Thor.health);
        
    $(".characterImage").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
    var available = $(".available-character").show();
    $("#characters-available").html(available);
  
    $("#game-message").empty();
    $("#restart").hide();

 
    characterSelected = false;
    defenderSelected = false;
    enemiesDefeated = 0;
    gameOver = false;

    character = {};
    defender = {};

    }

  $(document).ready(function() {
    $("#restart").hide();

//first character
    $("#Captain-America").on("click", function () {
        if(characterSelected == false) {
            $("#game-message").empty();
            initializeCharacter(CaptainAmerica);
            characterSelected = true;
    $("#Captain-America").removeClass("available-character").addClass("chosen-character");
    $("#character-selected").append(this);
    moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
       if($("#Captain-America").hasClass("enemy-character")) {
      $("#game-message").empty();
      initializeDefender(CaptainAmerica);
      defenderSelected = true;
      $("#Captain-America").removeClass("enemy-character").addClass("defender-character");
      $("#defender-section").append(this);
    }
  }
});

//second character
$("#Hulk").on("click", function () {
    if(characterSelected == false) {
        $("#game-message").empty();
        initializeCharacter(Hulk);
        characterSelected = true;
$("#Hulk").removeClass("available-character").addClass("chosen-character");
$("#character-selected").append(this);
moveToEnemies();
} else if ((characterSelected == true) && (defenderSelected == false)) {
   if($("#Hulk").hasClass("enemy-character")) {
  $("#game-message").empty();
  initializeDefender(Hulk);
  defenderSelected = true;
  $("#Hulk").removeClass("enemy-character").addClass("defender-character");
  $("#defender-section").append(this);
}
}
});
    


//third character
$("#Iron-Man").on("click", function () {
    if(characterSelected == false) {
        $("#game-message").empty();
        initializeCharacter(IronMan);
        characterSelected = true;
$("#Iron-Man").removeClass("available-character").addClass("chosen-character");
$("#character-selected").append(this);
moveToEnemies();
} else if ((characterSelected == true) && (defenderSelected == false)) {
   if($("#Iron-Man").hasClass("enemy-character")) {
  $("#game-message").empty();
  initializeDefender(IronMan);
  defenderSelected = true;
  $("#Iron-Man").removeClass("enemy-character").addClass("defender-character");
  $("#defender-section").append(this);
}
}
});


//forth character
$("#Thor").on("click", function () {
    if(characterSelected == false) {
        $("#game-message").empty();
        initializeCharacter(Thor);
        characterSelected = true;
$("#Thor").removeClass("available-character").addClass("chosen-character");
$("#character-selected").append(this);
moveToEnemies();
} else if ((characterSelected == true) && (defenderSelected == false)) {
   if($("#Thor").hasClass("enemy-character")) {
  $("#game-message").empty();
  initializeDefender(Thor);
  defenderSelected = true;
  $("#Thor").removeClass("enemy-character").addClass("defender-character");
  $("#defender-section").append(this);
}
}
});



$("#attack").on("click", function() {
    if (characterSelected && defenderSelected && !gameOver) {
        defender.health = defender.health - character.attack;
        $(".defender-character").children(".health").html(defender.health);
        $("#game-message").html("<p>You attacked " + defender.name + " for " + character.attack + " damage.<p>");
        character.attack = character.attack + character.attack;
        if (defender.health > 0) {
        character.health = character.health - defender.attack;
        $(".character-selected").children(".health").html(character.health);
          if (character.health > 0) {
          $("#game-message").append("<p>" + defender.name + " attacked you back for " + defender.attack + " damage.</p>");
        } else {
          gameOver = true;
          $("#game-message").html("<p>You lose!</p>");
          $("#restart").show();
        }
      } else {
        enemiesDefeated++;
        defenderSelected = false;
        $("#game-message").html("<p>You have defeated " + defender.name + ". Please choose another enemy.</p>");
        $(".defender-character").hide();

        if (enemiesDefeated === 3) {
          gameOver = true;
          $("#game-message").html("<p>You win!</p>");
          $("#restart").show();
        }
      }
    } else if (!characterSelected && !gameOver) {
      $("#game-message").html("<p>You have to choose your character.</p>");
    } else if (!defenderSelected && !gameOver) {
      $("#game-message").html("<p>You have to choose an enemy.</p>");
    }

});

  $("#restart").on("click", function() {
    resetGame();
  });

});
    
    
