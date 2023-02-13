import { useParams } from "react-router";
import { Post } from "../../components";
import { data } from "../../data";
import * as S from "./Article.styled";

export const Article = () => {
  const params = useParams();

  const article = data.filter((item) => item.slug === params.articleSlug);

  return (
    <S.Wrapper>
      <Post data={article[0]} isOpen />
    </S.Wrapper>
  );
};
