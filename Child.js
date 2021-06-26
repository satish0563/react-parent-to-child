import React from "react";

class Child extends React.Component {
  render() {
    return (
      <div>
        <p> {this.props.parentCallback}</p>
      </div>
    );
  }
}
export default Child;
