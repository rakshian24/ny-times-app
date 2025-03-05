import { Grid } from "@mui/material";
import { Article as ArticleType } from "../../types";
import Article from "../Article";

type Props = {
  articles: ArticleType[];
};

const Articles = ({ articles }: Props) => {
  return (
    <Grid container spacing={3}>
      {articles.map((article) => {
        return (
          <Grid item key={article.id} xs={12} sm={6} md={4}>
            <Article article={article} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Articles;
