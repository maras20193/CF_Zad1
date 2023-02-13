import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.post.bgc};
  color: ${({ theme }) => theme.colors.text};
  padding: 26px;
  border-radius: 50px 50px 50px 0;
`;

export const Title = styled.h2`
  font-size: 30px;

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    transition: 0.3s;

    :hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-self: flex-end;
`;
