import React, { Component } from "react";
import List from "../List/composant.js";
import AddTask from "../AddTask/composant.js";
import { DivContainer, Title, CentredDiv, Div } from "./style.js";

class App extends Component {
  render() {
    return (
      <DivContainer>
        <Title> My Todo List </Title>
        <CentredDiv>
          <Div>
            <AddTask />
            <List />
          </Div>
        </CentredDiv>
      </DivContainer>
    );
  }
}
export default App;
