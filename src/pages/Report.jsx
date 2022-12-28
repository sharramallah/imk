import { Box } from "@mui/system";
import React from "react";
import CreationDrawer from "../component/CreationDrawer";
import Grafik from "../component/Grafik";
import Navbar from "../component/Navbar";

export default function Report() {
  return (
    <Box>
      <CreationDrawer />
      <Navbar halaman="Laporan Tugas" />
      <Box
        sx={{
          width: "100vw",
          bgcolor: "#fee9e1",
          height: "100vh",
          color: "#5b3e31",
        }}
      >
        <Grafik />
      </Box>
    </Box>
  );
}
