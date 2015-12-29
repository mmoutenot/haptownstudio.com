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

  componentDidMount () {
    onscroll = () => {
      this.setState({ scrollPosition: window.scrollY })
    };
  }

  render () {
    let currentClient = CLIENTS[this.state.clientIndex];
    let playlistUrl = "https://embed.spotify.com/?uri=spotify%3Auser%3A12169845727%3Aplaylist%3A5VUu0mJPL6PEG3EZCd9nV6";
    let spotifyDims = { width: 300, height: 80 };
    let width = document.body.getBoundingClientRect().width;

    if (width > 1200 && this.state.scrollPosition < 800) {
      spotifyDims.height = 380;
    }

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

