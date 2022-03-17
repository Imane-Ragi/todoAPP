import styled from "styled-components";

export const TableStyle = styled.ul`
  margin: 20px 0;
`;

export const LineStyle = styled.li`
  background: #fff;
  border-radius: 5px;
  margin-bottom: 7px;
  position: relative;
  word-break: break-word;
`;

export const IconForCompleteAction = styled.li.attrs(() => ({
  className: "fa fa-check-square-o add-btn p-3",
  title: "Complete item",
}));

export const IconForUpdateAction = styled.li.attrs(() => ({
  className: "fa fa-pencil add-btn p-3",
  title: "Update item",
}));

export const IconForDeleteAction = styled.li.attrs(() => ({
  className: "fa fa-trash add-btn p-3",
  title: "Delete item",
}));
