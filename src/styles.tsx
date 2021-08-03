import styled from 'styled-components';


export const PostBox = styled.div`
  box-sizing: border-box;
  display: grid;
  padding: 10px;
  position: relative;
  width: 100%;
  height: 360px;

  a,
  a:hover {
    text-decoration: none;
  }
`;

export const GridCanvas = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;
