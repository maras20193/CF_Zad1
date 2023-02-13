import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgc};
  color: ${({ theme }) => theme.colors.text};
  padding: 30px 50px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
