import React, {Component} from "react";

import classNames from "./styles";

const CLIENTS = [
  "Adia Victoria",
  "Turbo Fruits",
  "The Rentals",
  "Royal Bangs",
  "Kort",
  "Wild Belle",
  "Those Darlins",
  "Black Lips",
  "Mindy Smith",
  "The Sheepdogs",
  "Hammock",
  "Wooden Finger",
  "Jeff the Brotherhood",
  "Yo La Tengo",
  "Jessie Baylin",
  "Tennis",
  "Lambchop",
  "Rogue Wave",
  "Son Volt",
  "Ultra Orange",
  "Marykate O'Neil",
  "Stone Jack Jones",
  "The Wreckers",
  "Be Your Own Pet",
  "Cheap Trick",
  "Chuck Prophet",
  "Michelle Branch",
  "Freedy Johnston",
  "Sleater-Kinney",
  "Guster"
]


export default class Title extends Component {
  constructor (props) {
    super(props);

    this.state = {
      clientIndex: 0,
      scrollPosition: 0
    };

    setInterval((() =>
      this.setState({
        clientIndex: (this.state.clientIndex + 1) % CLIENTS.length
      })
    ), 2000);
  }

  render () {
    let currentClient = CLIENTS[this.state.clientIndex];
    let playlistUrl = "https://embed.spotify.com/?uri=spotify%3Auser%3A1217133103%3Aplaylist%3A6UsD02k8btjmNn7UH4NQUH";
    let spotifyDims = { width: 300, height: 80 };

    return <div className={classNames.titlePage}>
      <div className={classNames.titleContainer}>
        <h1>Haptown Studio</h1>
        <h2>{currentClient}</h2>
      </div>
      <iframe
        className={classNames.spotifyPlayer}
        src={playlistUrl}
        width={spotifyDims.width}
        height={spotifyDims.height}
        frameBorder="0"
        allowTransparency="true">
      </iframe>
    </div>;
  }
}

