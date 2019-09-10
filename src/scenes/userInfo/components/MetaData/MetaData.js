import React, { Component } from "react";
import { List } from "components";

class MetaData extends Component {
  render() {
    const { className, src, alt, ...rest } = this.props;
    return <List className={className} src={src} alt={alt} />;
  }
}

export default MetaData;
