import React, {Component} from "react";

import classNames from "./styles";
import Title from "./title";
import Roger from "./roger";
import Gear from "./gear";


export default class HomeContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return <div className={classNames.home}>
      <Title/>
      <Roger/>
      <Gear/>
      <div className={classNames.footer}>
        <p>
          Haptown Studios, 2016 <br/>
          Nashville, TN<br/><br/>
          <a href="mailto:haptown491@gmail.com">haptown491@gmail.com</a><br/>
        </p>
      </div>
    </div>;
  }
}




