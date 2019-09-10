import React, { Component } from "react";
import { Button } from "components";

class LoadFollowersButton extends Component {
  // shouldComponentUpdate(nextProps) {
  //   return nextProps.disabled !== this.props.disabled ? true : false;
  // }

  render() {
    const { lastPage, loadMoreFollowers } = this.props;
    const content = lastPage ? "End of Followers" : "Load";
    return (
      <Button
        className="button centered"
        disabled={lastPage}
        onClick={loadMoreFollowers}
      >
        {content}
      </Button>
    );
  }
}

export default LoadFollowersButton;
