import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { Article as ArticleType } from "../../types";
import { screenSize } from "../../constants";
import moment from "moment";

type Props = {
  article: ArticleType;
};

const Article = ({ article }: Props) => {
  const isTablet = useMediaQuery(`(max-width:${screenSize.tablet})`);
  const publishedDate = moment(article.published_date).format("MMM D");

  return (
    <Accordion
      sx={{
        p: 2,
        my: 2,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      }}
    >
      <AccordionSummary expandIcon={!isTablet && <ExpandMore />}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={2}>
            <img
              src={
                article?.media[0]?.["media-metadata"][2]?.url ||
                "https://placehold.co/440x293/png"
              }
              alt={article.title}
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography variant="h6">{article.title}</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{article.abstract}</Typography>
      </AccordionDetails>
      <AccordionActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ pl: 1, color: "#6C7A89" }}>
          {publishedDate} | {article.byline}
        </Typography>
        <Button
          component="a"
          href={article.url}
          target="_blank"
          sx={{ color: "#0c7600" }}
        >
          View More
        </Button>
      </AccordionActions>
    </Accordion>
  );
};

export default Article;
