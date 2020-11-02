const players = require("./player.json")
let lineup = [];

console.log(players[0].name)

module.exports = {
    getPlayer: (req,res) => {
        const {search} = req.query;
        const resArr = [];

        if (search) {
            const filteredPlayers = players.filter(
                (player) =>
                player.name.toLowerCase().includes(search.toLowerCase())
            )
            for (let i = 0; i < 25; i++) {
                if (filteredPlayers[i]) {
                  resArr.push(filteredPlayers[i]);
                }
              }
            } else {
              for (let i = 0; i < 25; i++) {
                resArr.push(players[i]);
              }
        }
        return res.status(200).send(resArr)
    },

    getOnePlayer: (req,res) => {
        const {id} = req.params;
        const foundPlayers = 
        players.find((player) => player.id === +id)
        if(!foundPlayers) {
            return res.status(400).send("Player not found")
        }
        res.status(200).send(foundPlayers);
    },

    getLineup: (req,res) => {
        res.status(200).send(lineup)
    },

    addToLineup: (req,res) => {
        if(lineup.length < 5) {
        const {id} = req.params;
        const foundPlayers =  {...players.find((player) => player.id === +id)}
        foundPlayers.rating = [];
        lineup.push(foundPlayers);
        res.status(200).send(lineup)
        }
    },

    editRating: (req,res) => {
        const {index} = req.params;
        const {rating} =req.body;
        lineup[index].rating = rating;
        res.status(200).send(lineup);

    },
    removeFromLineup: (req,res) => {
        const {index} = req.params;
        lineup.splice(index, 1)
        res.status(200).send(lineup)
    },

}