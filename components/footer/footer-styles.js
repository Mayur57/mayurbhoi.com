import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 1em;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const FooterLink = styled.a`
  color: #fef6e5;
  margin-bottom: 8px;
  font-size: 14px;
  opacity: 0.7;
  text-decoration: none;
  transition: 200ms ease-in;

  &:hover {
    opacity: 1;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  color: #fff;
  opacity: 0.7;
  letter-spacing: 1.2px;
  margin-bottom: 10px;
  font-weight: 500;
`;
