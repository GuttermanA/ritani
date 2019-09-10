import React, { Component } from "react";
import { Button } from "components";

class LoadFollowersButton extends Component {
  // shouldComponentUpdate(nextProps) {
  //   return nextProps.disabled !== this.props.disabled ? true : false;
  // }
  render() {
    const { remainingPages } = this.props;
    console.log(this.props);
    const content = remainingPages ? "Load" : "End of Followers";
    return (
      <Button className="button centered" disabled={!remainingPages}>
        {content}
      </Button>
    );
  }
}

export default LoadFollowersButton;
