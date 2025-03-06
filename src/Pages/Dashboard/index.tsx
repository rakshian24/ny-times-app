import {
  CircularProgress,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { screenSize } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchArticles } from "../../features/articles/articlesSlice";
import Articles from "../../components/Articles";
import { RangeSelect } from "../../components/RangeSelect";

const Dashboard = () => {
  const [selectedRange, setSelectedRange] = useState<number>(1);
  const isTablet = useMediaQuery(`(max-width:${screenSize.tablet})`);
  const isMobile = useMediaQuery(`(max-width:${screenSize.mobile})`);

  const dispatch = useDispatch<AppDispatch>();
  const {
    data: articles,
    loading,
    error,
  } = useSelector((state: RootState) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles(selectedRange));
  }, [dispatch, selectedRange]);

  const handleRangeChange = (event: SelectChangeEvent<number>) => {
    setSelectedRange(event.target.value as number);
  };

  return (
    <>
      <Stack
        display={"flex"}
        direction={isMobile ? "column" : "row"}
        alignItems="center"
        spacing={2}
        py={3}
        justifyContent="space-between"
      >
        <Typography fontSize={isTablet ? 22 : 36} fontWeight="600">
          Most Popular Articles
        </Typography>

        <RangeSelect
          selectedRange={selectedRange}
          onRangeChange={handleRangeChange}
          isMobile={isMobile}
        />
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
