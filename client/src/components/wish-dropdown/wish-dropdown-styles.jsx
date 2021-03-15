import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: absolute;
  width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 17%;
  z-index: 5;

  @media screen and (max-width: 800px) {
    position: absolute;
    width: 300px;
    height: 250px;
    padding: 5px;
    top: 90px;
    right: 15px;
  }
`;

export const CartItemsContainer = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  @media screen and (max-width: 800px) {
    height: 250px;
  }
`;

export const EmptyMessage = styled.h3`
  font-size: 18 px;
  margin: 50px auto;

  @media screen and (max-width: 800px) {
    font-size: 14 px;
    margin: 10px auto;
  }
`;
