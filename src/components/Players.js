import React, {Component} from 'react';
import AgentList from './AgentList'
import axios from "axios"

class Players extends Component {
    constructor() {
        super()
        this.state = {
            searchInput: "",
            displayPlayer: [],
        }
    }

componentDidMount() {
    axios.get("/api/player").then((res) => {
        this.setState ({
            displayPlayer: res.data,
        })
    })
}
handleInput = (e) => {
    this.setState ({ searchInput: e.target.value})
    axios.get(`api/player?search=${e.target.value}`).then((res) =>{
        this.setState({ displayPlayer: res.data })
    })
    .catch((err) => console.log(err))
}
render () {
    let mappedPlayer = []
    mappedPlayer = this.state.displayPlayer.map ((player) => (
        <AgentList key={player.id}
        player= {player}
        
        addToLineup = {this.props.addToLineup}/>
    ))
    return (
        <span>
            <input className="btn"value={this.state.searchInput} onChange={this.handleInput}/>
            <ul className="list">{mappedPlayer}</ul>
        </span>
    )
    }


}
export default Players