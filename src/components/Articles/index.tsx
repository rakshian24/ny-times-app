import { Stack } from "@mui/material";
import { Article as ArticleType } from "../../types";
import Article from "../Article";

type Props = {
  articles: ArticleType[];
};

const Articles = ({ articles }: Props) => {
  return (
    <Stack>
      {articles.map((article) => {
        return <Article article={article} />;
      })}
    </Stack>
  );
};

export default Articles;
