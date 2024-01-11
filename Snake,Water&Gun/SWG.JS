document.addEventListener("DOMContentLoaded", function () {
    const characterNames = {
        "s": "Snake",
        "g": "Gun",
        "w": "Water"
    };

    const characters = Object.keys(characterNames);
    const charactersLength = characters.length;

    const result = characters[Math.floor(Math.random() * charactersLength)];

    document.getElementById("snake").addEventListener("click", function () {
        playGame("s");
    });

    document.getElementById("gun").addEventListener("click", function () {
        playGame("g");
    });

    document.getElementById("water").addEventListener("click", function () {
        playGame("w");
    });

    function playGame(userChoice) {
        const computerChoice = result;
        let outcome = "";

        if (
            (userChoice === "s" && computerChoice === "w") ||
            (userChoice === "w" && computerChoice === "g") ||
            (userChoice === "g" && computerChoice === "s")
        ) {
            outcome = "Win";
        } else if (
            (userChoice === "w" && computerChoice === "s") ||
            (userChoice === "g" && computerChoice === "w") ||
            (userChoice === "s" && computerChoice === "g")
        ) {
            outcome = "Lose";
        } else {
            outcome = "Tie";
        }

        const userChoiceName = characterNames[userChoice];
        const computerChoiceName = characterNames[computerChoice];

        if(outcome == "Tie"){
            document.getElementById("result").textContent = `It's a ${outcome}`;
        }
        else{
            document.getElementById("result").textContent = `You ${outcome}`;
        }
        document.getElementById("computer-choice").textContent = `Computer chose: ${computerChoiceName}`;
    }
});
