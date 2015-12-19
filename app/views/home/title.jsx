import React, {Component} from "react";
import classNames from "./styles";

const CLIENTS = [
  "The Sheepdogs",
  "The Black Lips",
  "Tennis",
  "Yo La Tengo",
  "Those Darlins",
  "Paula Cole",
  "Stone Jack Jones",
  "Rogue Wave",
  "Element of Crime",
  "The Clones",
  "Lambchop",
  "Blake Brown",
  "Jeff The Brotherhood"
]

export default class Title extends Component {
  constructor (props) {
    super(props);

    this.state = {
      clientIndex: 0
    };
    setInterval(() => this.setState({clientIndex: (this.state.clientIndex + 1) % CLIENTS.length}), 2000)
  }

  render () {
    let currentClient = CLIENTS[this.state.clientIndex];
    return <div className={classNames.titlePage}>
      <div className={classNames.titleContainer}>
        <h1>Haptown Studio</h1>
        <h2>{currentClient}</h2>
      </div>
      <iframe className={classNames.spotifyPlayer} src="https://embed.spotify.com/?uri=spotify%3Auser%3A1217133103%3Aplaylist%3A6UsD02k8btjmNn7UH4NQUH" width="300" height="80" frameBorder="0" allowTransparency="true"></iframe>
    </div>;
  }
}




