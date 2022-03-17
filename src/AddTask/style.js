import styled from "styled-components";

export const ContainerDivInAdd = styled.div.attrs(() => ({
  className: "form-group has-feedback d-flex flex-row",
}));

export const Input = styled.input.attrs(() => ({
  type: "text",
  className: "form-control p-2",
  placeholder: "✍️ Add Task..",
}));

export const Icon = styled.i.attrs(() => ({
  className: "fa fa-plus add-btn p-3",
  title: "Add item",
}));
