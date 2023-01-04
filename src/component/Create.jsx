import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

export default function Create() {
  return (
    <Box
      sx={{ "& > :not(style)": { ml: 0.5, mt: 0.5, bgcolor: '#5b5f97' } }}
      component={Link}
      to={"/createtask"}
    >
      <Fab size="medium" color="#64b6ac" aria-label="add">
        <AddIcon sx={{ color: 'white' }} />
      </Fab>
    </Box>
  );
}
