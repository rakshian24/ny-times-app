import { Stack, useMediaQuery } from "@mui/material";
import { screenSize } from "./constants";
import Header from "./components/Header";
import Dashboard from "./Pages/Dashboard";

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
          bgcolor: "#F2F1EF"
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
          <Dashboard />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
