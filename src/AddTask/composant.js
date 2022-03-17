import React, { Component } from "react";
import { ContainerDivInAdd, Icon, Input } from "./style.js";
class AddTask extends Component {
  render() {
    return (
      <ContainerDivInAdd>
        <Input />
        <Icon />
      </ContainerDivInAdd>
    );
  }
}

export default AddTask;
