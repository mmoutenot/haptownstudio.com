import React, {Component} from "react";

import classNames from "./styles";


export default class Roger extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return <div className={classNames.rogerPage}>
      <div className={classNames.contentContainer}>
        <h1>Roger Moutenot</h1>
        <p>
          After attending the Institute of Audio Research in NYC, Roger worked his way from Assistant Engineer to House Engineer at the prestigious Skyline Studio.
        </p>
        <p>
          He has since worked with many talented musicians including Lou Reed, Elvis Costello, John Zorn, Naked City, Bill Frisell, They Be Might Giants, Rosanne Cash, Joseph Arthur, Paula Cole, Patti Scialfa and Nile Rogers, T Bone Burnett and many more. <a href="http://www.allmusic.com/artist/roger-moutenot-mn0000302671/credits" target="_blank">See his complete discography.</a>
        </p>
        <p>
          In the early 2000s, Roger created Haptown Studio in Nashville while he was producing Guster's, "Keep it Together" record, transforming an auto body shop into what is now an awesome studio. Located in an industrial section of Nashville, this 5000 sqft space has a spacious 30x30 control room, 3 iso booths and a large live room. There's a great burger place next door and ping pong in the back room!
        </p>
        <p>Get in touch at <a href="mailto:haptown491@gmail.com">haptown491@gmail.com</a></p>
      </div>

    </div>
  }
}




