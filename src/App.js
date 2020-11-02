
import './App.css';
import Header from './components/Header'
import React from 'react';
import Players from './components/Players'
import Lineup from './components/Lineup'
import axios from "axios";

class App extends React.Component {
constructor() {
  super ()

  this.state = {
    lineup: [],
  }
  this.addToLineup = this.addToLineup.bind(this)
}

componentDidMount() {
  axios.get("/api/lineup").then((res) => {
    this.setState({ lineup: res.data })
  })
  .catch((err) => console.log(err))
}
addToLineup(id) {
  axios
  .post(`/api/lineup/${id}`)
  .then((res) => {
    this.setState ({ lineup: res.data})
  })
  .catch((err) => console.log(err))
}
removeFromLineup = (index) => {
  axios
  .delete(`/api/lineup/${index}`).then((res) => {
    this.setState ({ lineup: res.data})
  })
  .catch((err) => console.log(err))
}
editRating = (index, rating) => {
  axios.put(`/api/lineup/${index}`, {rating}).then((res) => {
    this.setState({ lineup: res.data})
  })
  .catch((err) => console.log(err))
}

  render () {
  return (
    <div>
      <Header />
      <div className="box">
      <Lineup lineup={this.state.lineup}
      removeFromLineup={this.removeFromLineup}
      editRating={this.editRating}/>
      </div>
      <Players addToLineup={this.addToLineup}/>
      
      
      
        
        
      
    </div>
  );
}
}
export default App;
