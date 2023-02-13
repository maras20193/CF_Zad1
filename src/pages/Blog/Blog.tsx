import * as S from "./Blog.styled";
import { data } from "../../data";
import { Post } from "../../components";

export const Blog = () => (
  <S.Wrapper>
    {data.map((article) => (
      <Post data={article} />
    ))}
  </S.Wrapper>
);
