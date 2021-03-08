import styled from "styled-components";

export const CheckOutContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 30% 10% 10% 10%;
  grid-gap: 2px;
  justify-items: center;
  text-align: center;
  font-size: 14px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  @media screen and (max-width: 800px) {
    grid-template-columns: 40% 30% 10% 10% 10%;
    font-size: 12px;
    justify-items: left;
    text-align: left;
    grid-gap: 5px;
  }
`;

export const HeaderTitle = styled.h1`
  text-transform: uppercase;
  font-size: 14px;
  @media screen and (max-width: 800px) {
    font-size: 12px;
    text-transform: none;
  }
`;
