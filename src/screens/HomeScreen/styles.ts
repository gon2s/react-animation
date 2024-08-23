import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Box = styled.div`
  width: 640px;
  aspect-ratio: 1;
  border: 1px solid #707d7a;
  background-color: rgb(254, 249, 243);
  box-shadow: 2px 2px 16px rgba(10, 37, 41, 0.25);
  border-radius: 16px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const TitleText = styled.span`
  display: flex;
  padding: 32px 0 24px;
  margin: 0 32px;
  font-size: 24px;
  color: #707d7a;
`;

export const Divider = styled.span`
  margin: 0 20px;
  display: flex;
  background-color: #707d7a;
  flex: 1;
  height: 0.5px;
`;

export const AnimationBox = styled.div`
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px;
`;

export const AnimationItemBox = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #a0937d;
  color: black;
  border-radius: 12px;
  &:hover {
    cursor: pointer;
    background-color: #f8ede3;
  }
`;
