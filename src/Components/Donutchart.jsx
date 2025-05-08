import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Box, Typography, Stack } from "@mui/material";

const COLORS = ["#B71C1C", "#FDD835", "#E0E0E0", "#2E7D32"];

const DonutChart = ({ data,style }) => {
  const total = data.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <Box display="flex" alignItems="center" gap={4}>
      <PieChart width={150} height={150} style={style}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={60}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
        </Pie>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="14px"
          fontWeight="bold"
        >
          {total}{"\n"}Total
        </text>
      </PieChart>

      {/* Legend */}
      <Stack spacing={1}>
        {data.map((entry, index) => (
          <Stack direction="row" alignItems="center" spacing={1} key={index}>
            <Box
              sx={{
                width: 10,
                height: 10,
                backgroundColor: COLORS[index],
                borderRadius: "2px",
              }}
            />
            <Typography variant="caption">
              {entry.name} ({entry.value})
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default DonutChart