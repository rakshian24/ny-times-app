import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Article as ArticleType } from "../../types";

type Props = {
  article: ArticleType;
};

const Article = ({ article }: Props) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={article?.media[0]?.["media-metadata"][2].url}
        title={article.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {article.abstract}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Article;
