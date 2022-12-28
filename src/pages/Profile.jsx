import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  return (
    <Box sx={{ bgcolor: "#fee9e1", height: "100vh" }}>
      <Box sx={{ p: 5 }}>
        <Typography variant="h6" gutterBottom>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIosIcon />
          </IconButton>
          Profile
        </Typography>
      </Box>

      <Grid container justifyContent={"center"}>
        <Grid item>
          <Avatar
            sx={{ width: 150, height: 150 }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
        </Grid>
      </Grid>

      <Box sx={{ m: 5, mt: 5, bgcolor: "#fee9e1" }}>
        <Box sx={{}}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Nama Lengkap"
            variant="outlined"
            size="small"
            margin="dense"
          />
        </Box>
        <Box>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Nama Panggilan"
            variant="outlined"
            size="small"
            margin="dense"
          />
        </Box>
        <Box>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Jenis Kelamin"
            variant="outlined"
            size="small"
            margin="dense"
          />
        </Box>
        <Box>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Deskripsi"
            multiline
            rows={4}
            defaultValue=""
            margin="dense"
          />
        </Box>
        <Box mt={2}>
          <Button variant="contained">Simpan</Button>
        </Box>
      </Box>
    </Box>
  );
}
