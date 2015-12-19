import React     from "react";
import {connect} from "react-redux";

/**
* Entry point for the whole App this includes secured and not secured content.
* Application gets composed by redux therefore we can access to all the redux
* sugar from here after.
*/
export default class ApplicationContainer extends React.Component {

  render () {
    return (
      <div>{this.props.children}</div>
    );
  }
}
