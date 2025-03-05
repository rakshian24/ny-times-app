import {
  CircularProgress,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect } from "react";
import { screenSize } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchArticles } from "../../features/articles/articlesSlice";
import Articles from "../../components/Articles";

const Dashboard = () => {
  const isTablet = useMediaQuery(`(max-width:${screenSize.tablet})`);

  const dispatch = useDispatch<AppDispatch>();
  const {
    data: articles,
    loading,
    error,
  } = useSelector((state: RootState) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <>
      <Stack py={3}>
        <Typography fontSize={isTablet ? 22 : 36} fontWeight="600">
          Most Popular Articles
        </Typography>
      </Stack>
      <Stack width={"100%"}>
        {loading && (
          <Stack alignItems="center" width={"100%"} py={4}>
            <CircularProgress />
          </Stack>
        )}

        {error && (
          <Typography
            color="error"
            fontSize={isTablet ? 16 : 18}
            textAlign={"center"}
            py={2}
          >
            Failed to load articles: {error}
          </Typography>
        )}

        {!loading && !error && <Articles articles={articles} />}
      </Stack>
    </>
  );
};

export default Dashboard;
