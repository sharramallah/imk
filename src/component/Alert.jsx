import React from "react";
import Alert from "@mui/material/Alert";
import { Box } from "@mui/material";

export default function Alert() {
  return (
    <Box sx={{ width: "100%" }}>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Box>
  );
}
