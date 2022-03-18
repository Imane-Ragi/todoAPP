import styled from "styled-components";

export const LineStyle = styled.li`
  background: ${props => props.background};
  text-decoration: ${props => props.textDecoration};
  border-radius: 5px;
  color: ${props => props.textColor};
  margin-bottom: 7px;
  position: relative;
  word-break: break-word;
  padding: 2% 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

