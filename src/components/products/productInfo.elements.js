import styled from 'styled-components';

export const ProductSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #101522;
`;
export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  `;

export const ProductHeading = styled.h1`
color: #fff;
font-size: 48px;
margin-bottom: 24px;
`;