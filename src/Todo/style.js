import styled from 'styled-components';

// export const LineStyle = styled.li`
//   background: ${props => props.background};
//   text-decoration: ${props => props.textDecoration};
//   border-radius: 5px;
//   color: ${props => props.textColor};
//   margin-bottom: 7px;
//   position: relative;
//   word-break: break-word;
//   padding: 2% 50px;
// `;

export const LineStyle = styled.li(({ completed }) => ({
  background: !completed ? 'white' : '#5529dc',
  textDecoration: !completed ? 'none' : 'line-through',
  textColor: !completed ? 'black' : 'white',
  borderRadius: 5,
  marginBottom: 7,
  position: "relative",
  wordBreak: 'break-word',
  padding: '2% 50px',
}));

export const Wrapper = styled.div`
  display: flex,
  align-items: baseline
`;
