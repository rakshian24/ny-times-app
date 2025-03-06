import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

interface RangeSelectProps {
  selectedRange: number;
  onRangeChange: (event: SelectChangeEvent<number>) => void;
  isMobile: boolean;
}

export const RangeSelect: React.FC<RangeSelectProps> = ({
  selectedRange,
  onRangeChange,
  isMobile,
}) => {
  return (
    <FormControl
      size="small"
      fullWidth={isMobile}
      sx={{
        minWidth: isMobile ? "100%" : 200,
      }}
    >
      <InputLabel id="date-range-label" sx={{ color: "#0c7600" }}>
        Range
      </InputLabel>
      <Select
        labelId="date-range-label"
        label="Range"
        value={selectedRange}
        onChange={onRangeChange}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0c7600",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0c7600",
          },
        }}
        MenuProps={{
          sx: {
            "& .MuiMenuItem-root:hover": {
              backgroundColor: "#0c7600",
              color: "#ffffff",
            },
            "& .MuiMenuItem-root.Mui-selected": {
              backgroundColor: "#0c76 !important",
            },
            "& .MuiMenuItem-root.Mui-selected:hover": {
              backgroundColor: "#0c76",
              color: "#000000",
            },
          },
        }}
      >
        <MenuItem value={1}>Today</MenuItem>
        <MenuItem value={7}>Last 7 Days</MenuItem>
        <MenuItem value={30}>Last 30 Days</MenuItem>
      </Select>
    </FormControl>
  );
};
