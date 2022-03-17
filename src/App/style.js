import styled from "styled-components";

export const DivContainer = styled.div`
  padding-top: 100px;
`;
export const Title = styled.h1.attrs(() => ({
  className: "justify-content-center",
}))`
  color: #ffff;
`;
export const CentredDiv = styled.div.attrs(() => ({
  className: "row d-flex justify-content-center",
}));
export const Div = styled.div.attrs(() => ({
  className: "col-md-6 col-md-offset-4 col-xs-6 col-xs-offset-3",
}));
