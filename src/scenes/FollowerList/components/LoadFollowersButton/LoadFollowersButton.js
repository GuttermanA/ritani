import React, { Fragment, useEffect, useRef } from "react";
import { Button } from "components";

const LoadFollowersButton = props => {
  const { lastPage, loadMoreFollowers, page } = props;
  const content = lastPage ? "End of Followers" : "Load";

  const followersEndRef = useRef(null);

  const scrollToBottom = () => {
    if (page !== 1) {
      setTimeout(() => {
        followersEndRef.current.scrollIntoView({
          block: "end",
          behavior: "smooth",
          inline: "nearest"
        });
      }, 50);
    }
  };

  useEffect(scrollToBottom);

  return (
    <Fragment>
      <Button
        data-testid="load-followers-button"
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
