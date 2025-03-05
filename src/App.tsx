import { useEffect } from "react";
import {
  Stack,
  Typography,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { screenSize } from "./constants";
import Header from "./components/Header";
import Articles from "./components/Articles";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { fetchArticles } from "./features/articles/articlesSlice";

function App() {
  const isTablet = useMediaQuery(`(max-width:${screenSize.tablet})`);
  const isMobile = useMediaQuery(`(max-width:${screenSize.mobile})`);

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
    <Stack sx={{ height: "100vh", margin: 0 }}>
      <Header title="The New York Times" />
      <Stack
        sx={{
          height: "100%",
          overflowY: "auto",
          pb: isMobile ? 6 : 4,
        }}
      >
        <Stack
          sx={{
            maxWidth: "1300px",
            margin: isTablet ? "0" : "0 auto",
            padding: isMobile ? 2 : 3,
            ...(!isTablet && { width: "100%" }),
          }}
        >
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
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
