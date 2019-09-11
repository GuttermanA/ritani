import React, { Componet } from "react";

class Header extends Component {
  render() {
    const { as, name, id, children, className, ...rest } = this.props;
    const Tag = as;
    return (
      <Tag className={className} name={name} id={id} {...rest}>
        {children}
      </Tag>
    );
  }
}
