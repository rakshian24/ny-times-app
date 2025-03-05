import { Stack, Typography, useMediaQuery } from "@mui/material";
import { screenSize } from "../../constants";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const isMobile = useMediaQuery(`(max-width:${screenSize.mobile})`);

  return (
    <Stack
      display={"flex"}
      alignItems={"center"}
      p={2}
      sx={{
        boxShadow:
          "0px 6px 10px -2px rgba(50, 50, 93, 0.25), 0px 3px 6px -3px rgba(0, 0, 0, 0.3)",
        zIndex: 999999,
      }}
    >
      <Typography sx={{ fontSize: isMobile ? 24 : 32, fontWeight: "bold" }}>
        {title}
      </Typography>
    </Stack>
  );
};

export default Header;
