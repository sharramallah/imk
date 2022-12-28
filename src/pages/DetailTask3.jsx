import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function DetailTask3() {
  const navigate = useNavigate();
  return (
    <Box sx={{ bgcolor: "#fee9e1", height: "100vh" }}>
      <Box sx={{ p: 5 }}>
        <Typography variant="h6" gutterBottom>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIosIcon />
          </IconButton>
          UI / UX
        </Typography>
      </Box>

      <Box
        sx={{
          m: 5,
          bgcolor: "#64b6ac",
          p: 6,
          px: 3,
          borderRadius: 10,
          color: "white",
        }}
      >
        <Typography variant="h5" fontWeight={"bold"}>
          Judul
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 17 }}>
          UI / UX
        </Typography>
        <Typography variant="h5" mt={2} fontWeight={"bold"}>
          Sub tugas
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 17 }}>
          - Membuat prototype
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 17 }}>
          - Membuat wireframe
        </Typography>
        <Typography variant="h5" mt={2} fontWeight={"bold"}>
          Tanggal Deadline
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 17 }}>
          17 Agustus 1945
        </Typography>
      </Box>
    </Box>
  );
}
