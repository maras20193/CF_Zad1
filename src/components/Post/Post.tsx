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
        <h2>{data.title}</h2>
        <p>{data.content}</p>
      </>
    ) : (
      <>
        <NavLink to={`${routes.blog}/${data.slug}`}>
          <h2>{data.title}</h2>
        </NavLink>
        <p>{data.entry}</p>
      </>
    )}
    <div>
      <p>{data.author}</p>
      <p>{data.date}</p>
    </div>
  </S.Wrapper>
);
