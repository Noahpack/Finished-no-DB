import React, { Component } from "react";

 class PlayerLineup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ratingInput: props.player.rating,
            toggleEdit: false,
            id: props.player.id
        }
    }
    currentIndex = 4
    handleChange = (event) => {
        this.setState({ ratingInput: event.target.value})

    }
    toggleEdit = () => {
        this.setState({toggleEdit: !this.state.toggleEdit})
    }
    


    render () {
        const { player } = this.props;
        return (
            <li className="players">
                <p 
                className="x-btn"

                onClick={(e) => {
                    e.stopPropagation()
                    this.props.removeFromLineup(this.props.index);
                    
                }}
                >
                    {" Sell "}
                    <div className="div">
                    <img className="playerImg"src={player.img}/>
                    </div>
                </p>
                
                <h1>{player.name}</h1>
                <h2>{player.position}</h2>
                {this.state.toggleEdit? (
                    <input 
                    value={this.state.ratingInput}
                    onChange={this.handleChange}
                    />
                ) : (
                
                <h2>Rating: {player.rating}</h2>
                
                )}
                {this.state.toggleEdit ? (
                    <div>
                        <button 
                        onClick={() =>{
                         this.props.editRating(
                             this.props.index,
                             this.state.ratingInput
                         );
                         this.toggleEdit();
                        }}
                        >
                            Save
                        </button>
                        <button className="button"
                        onClick={() => {
                            this.setState({ratingInput: player.rating})
                            this.toggleEdit()
                        }}>
                            Cancel
                        </button>
                    </div>
                ): null}
                <button onClick={this.toggleEdit}>Edit</button>
                    <h2>Contract: ${player.contract}</h2>
                
                
                

            </li>
        )
    }
}
export default PlayerLineup