import React, { Fragment, useEffect, useRef } from "react";
import { Button } from "components";

const LoadFollowersButton = props => {
  const { lastPage, loadMoreFollowers } = props;
  const content = lastPage ? "End of Followers" : "Load";

  const followersEndRef = useRef(null);

  const scrollToBottom = () => {
    followersEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom);

  return (
    <Fragment>
      <Button
        className="button centered"
        disabled={lastPage}
        onClick={loadMoreFollowers}
      >
        {content}
      </Button>
      <div ref={followersEndRef} />
    </Fragment>
  );
};

export default LoadFollowersButton;
