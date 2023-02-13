import * as S from "./Layout.styled";
import { Nav } from "./Nav/Nav";

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => (
  <S.Wrapper>
    <Nav />
    <S.Content>{children}</S.Content>
  </S.Wrapper>
);
