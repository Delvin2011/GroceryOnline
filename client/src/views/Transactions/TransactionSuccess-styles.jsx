import styled from 'styled-components';

export const Heading = styled.h3`
    text-align: center;
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: center;
    color: #4a4a4a;
    font-weight : bold;
    @media screen and (max-width: 800px){
    font-size: 14px;
}
`;

export const Container = styled.div`;
        margin-left: 10%;
        margin-right: 10%;
`;

export const Content = styled.div`;
    font-size: 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: left;
    text-align: justify;
    color: #4a4a4a;
    @media screen and (max-width: 800px){
    font-size: 12px;
}
`;

export const Response = styled.h4`
    text-align: center;
    color: #00c400;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 1px;
    font-size: 14px;
    margin-top: -10px;
    font-weight: bold;
    @media screen and (max-width: 800px){
        font-size: 12px;
}
`;

export const Errors = styled.h4`
    text-align: center;
    color: red;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 1px;
    font-size: 14px;
    margin-top: -10px;
    font-weight: bold;
    @media screen and (max-width: 800px){
        font-size: 12px;
}
`;