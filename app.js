function gameFunction() {
    var numberOfPlayers = document.getElementById("numberOfPlayers").value;
    var numberOfTeams = document.getElementById("numberOfTeams").value;
    var playersName = document.getElementById("playersName").value;


    console.log(playersName.split(","));
    var sortName = playersName.split(",");
    console.log(sortName);

    if (numberOfPlayers == sortName.length) {
        var teams = numberOfPlayers / numberOfTeams;
        var teamGenerated = [];
        var playersHistoryOfIndex = [];

        for (var i = 0; i < teams; i++) {
            var particularTeamGenerator = [];
            while (particularTeamGenerator.length != numberOfTeams) {
                var random = Math.floor(Math.random() * sortName.length); // 0 - 2 
                if (playersHistoryOfIndex.indexOf(random) == -1) {
                    playersHistoryOfIndex.push(random);
                    particularTeamGenerator.push(sortName[random]);
                } else {
                    random = Math.floor(Math.random() * sortName.length);
                }
            }
            teamGenerated.push(particularTeamGenerator)
        }


        console.log(teamGenerated);


        for(var i = 0; i<teamGenerated.length; i++){
            var playersTag = ``;
            teamGenerated[i].forEach(e => {
                playersTag += `<p>${e}</p>`;
            })
console.log(playersTag)
            document.getElementById("mainCard").innerHTML += `<div class="card" id="${i+1}">
            <h1>Team ${i+1}</h1>
            <div class="team-members">
                ${playersTag}
            </div>
            <h1>0</h1>
            <button class="downbutton" onclick="confetti.start(5000);">Winner</button>
            <button class="downbutton" onclick="">Reset All Score</button>
        </div>`;
        }


     




    } else {
        alert("number of players does not match number of players you've entered.")
    }
    // console.log(numberOfPlayers / numberOfTeams);


    // team 2 ppl 10 10 => 2 players each and 5 teams or 5 player on each team 2 teams. 

    //how many players are there? 
    //how many players you want inside each team? c
    //players names.


}



