import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2020",
    tugas_selesai: 10,
    tugas_belum_selesai: 9,
    amt: 2400,
  },
  {
    name: "2021",
    tugas_selesai: 4,
    tugas_belum_selesai: 90,
    amt: 2210,
  },
  {
    name: "2022",
    tugas_selesai: 24,
    tugas_belum_selesai: 50,
    amt: 2290,
  },
  {
    name: "2023",
    tugas_selesai: 9,
    tugas_belum_selesai: 10,
    amt: 2000,
  },
];

export default class Grafik extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

  render() {
    return (
      <Box sx={{ bgcolor: "#fffffb" }}>
        <Grid container alignItems={"center"} direction="column">
          <Grid item>
            <Box sx={{ mt: 3 }}>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Grafik Laporan Tugas
                </Typography>
              </Box>
              <Box sx={{ mt: 3 }}></Box>
            </Box>
          </Grid>
        </Grid>
        <ResponsiveContainer width={"100%"} height={200}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="tugas_selesai" fill="#c6f991" />
            <Bar dataKey="tugas_belum_selesai" fill="#ffabab" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    );
  }
}
