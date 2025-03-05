import { Stack, Typography, useMediaQuery } from "@mui/material";
import { screenSize } from "./constants";
import { data } from "./dummyData.js";
import Header from "./components/Header";
import Articles from "./components/Articles";

function App() {
  const isTablet = useMediaQuery(`(max-width:${screenSize.tablet})`);
  const isMobile = useMediaQuery(`(max-width:${screenSize.mobile})`);

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
          }}
        >
          <Stack py={3}>
            <Typography fontSize={isMobile ? 22 : 36} fontWeight={"600"}>
              Most Popular Articles
            </Typography>
          </Stack>
          <Articles articles={data.results} />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
