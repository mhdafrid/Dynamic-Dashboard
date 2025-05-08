import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const Linebar = ({value}) => {
  const total = parseInt(value.total) ;
  const critical = parseInt(value.critical);
  const high = parseInt(value.high);
  const remaining = total - (critical + high);

  const criticalPercent = (critical / total) * 100;
  const highPercent = (high / total) * 100;
  const remainingPercent = (remaining / total) * 100;

  return (
    <Box width={400} fontFamily="Arial, sans-serif">
      <Typography variant="body1" fontWeight="bold">
        {total} Total Vulnerabilities
      </Typography>

      {/* Progress Bar */}
      <Box
        sx={{
          display: "flex",
          height: 14,
          borderRadius: 7,
          overflow: "hidden",
          mt: 1,
        }}
      >
        <Box
          sx={{
            width: `${criticalPercent}%`,
            backgroundColor: "#8B0000",
          }}
        />
        <Box
          sx={{
            width: `${highPercent}%`,
            backgroundColor: "#F26E25",
          }}
        />
        <Box
          sx={{
            width: `${remainingPercent}%`,
            backgroundColor: "#EED85C",
          }}
        />
      </Box>

      {/* Legend */}
      <Stack direction="row" spacing={3} mt={1}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            sx={{
              width: 10,
              height: 10,
              backgroundColor: "#8B0000",
              borderRadius: "2px",
            }}
          />
          <Typography variant="caption">Critical ({critical})</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            sx={{
              width: 10,
              height: 10,
              backgroundColor: "#F26E25",
              borderRadius: "2px",
            }}
          />
          <Typography variant="caption">High ({high})</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Linebar;
