import React, { Component } from "react";
import {
  TableStyle,
  LineStyle,
  IconForCompleteAction,
  IconForUpdateAction,
  IconForDeleteAction,
} from "./style.js";
class List extends Component {
  render() {
    return (
      <TableStyle>
        <LineStyle>
          Formation React
          <IconForCompleteAction />
          <IconForUpdateAction />
          <IconForDeleteAction />
        </LineStyle>
      </TableStyle>
    );
  }
}

export default List;
