import React, {Component} from 'react';

class SongCreate extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    }
  }

  onTitleChange(event){
    this.setState({
      title: event.target.value
    })
  }
  render(){
    return (
        <div>
          <h3>Create a New Song</h3>
          <form>
            <label>Song Title: </label>
            <input type="text" value={this.state.title} onChange={this.onTitleChange}/>
          </form>
        </div>
    )
  }
}

export default SongCreate;
