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
          Roger created Haptown Studio 10 years ago while he was producing Guster's, "Keep it Together" record. In his spare time, Roger and his carpenter, Travis transformed an auto body into an awesome studio.  Located in an industrial section of Nashville, this 5000 sq foot space has an amazing 30x30 control room, 3 iso booths and a large live room. There's a great burger place next door and ping pong in the back room!
        </p>
      </div>

    </div>
  }
}




