import React, { Component } from "react";
import SmallEventCardContent from "./SmallEventCardContent";

class SmallEventCard extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  render() {
    const onHover = () => {
      this.setState({ hover: true });
    };
    const offHover = () => {
      this.setState({ hover: false });
    };
    return (
      <li
        key={this.props.data.id}
        onMouseEnter={this.props.data.title.length > 40 ? onHover : () => {}}
        onMouseLeave={this.props.data.title.length > 40 ? offHover : () => {}}
      >
        <SmallEventCardContent hover={this.state.hover} {...this.props} />
      </li>
    );
  }
}

export default SmallEventCard;
