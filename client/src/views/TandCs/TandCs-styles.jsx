import styled from "styled-components";

export const TCList = styled.ol`
  text-align: left;
  color: #4a4a4a;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 1.5px;
  font-size: 12px;

  & > li {
    line-height: 2;
  }

  @media screen and (max-width: 800px) {
    font-siz: 10px;
    & > li {
      line-height: 1.2;
      letter-spacing: 1px;
    }
  }
`;

export const Heading = styled.h3`
  text-align: center;
  font-size: 14px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  align-items: center;
  color: #4a4a4a;
  font-weight: bold;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

export const IntextBold = styled.span`
  font-weight: bold;
`;
