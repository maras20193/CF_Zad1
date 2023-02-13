import { routes } from "../../../utils/routes";
import * as S from "./Nav.styled";

export const Nav = () => (
  <S.Wrapper>
    <S.Link to={routes.main}>Strona główna</S.Link>
    <S.Link to={routes.about}>O mnie</S.Link>
    <S.Link to={routes.blog}>Blog</S.Link>
  </S.Wrapper>
);
