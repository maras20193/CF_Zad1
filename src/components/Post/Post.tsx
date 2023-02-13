import { NavLink } from "react-router-dom";
import { routes } from "../../utils/routes";
import * as S from "./Post.styled";

type PostData = {
  title: string;
  slug: string;
  author: string;
  date: string;
  entry: string;
  content: string;
};

type PostProps = {
  data: PostData;
  isOpen?: boolean;
};

export const Post = ({ data, isOpen }: PostProps) => (
  <S.Wrapper>
    {isOpen ? (
      <>
        <S.Title>{data.title}</S.Title>
        <p>{data.content}</p>
      </>
    ) : (
      <>
        <S.Title>
          <NavLink to={`${routes.blog}/${data.slug}`}>{data.title}</NavLink>
        </S.Title>
        <p>{data.entry}</p>
      </>
    )}
    <S.DetailsWrapper>
      <p>{data.author}</p>
      <p>{data.date}</p>
    </S.DetailsWrapper>
  </S.Wrapper>
);
