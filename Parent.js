import React from "react";
import Child from "./component/child";

class parent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "satish kumar"
    };
  }

  render() {
    return (
      <div>
        <Child parentCallback={this.state.name} />
      </div>
    );
  }
}

export default parent;
