import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Box sx={{ bgcolor: "#fffffb", height: "100vh" }}>
      <Grid container justifyContent={"center"}>
        <Grid item>
          <Typography variant="h4" gutterBottom mt={20}>
            Daftar
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ m: 5, mt: 7 }}>
        <Box sx={{}}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Nama Lengkap"
            variant="outlined"
            size="medium"
            margin="normal"
          />
        </Box>
        <Box>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="medium"
            margin="normal"
          />
        </Box>
        <Box>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="medium"
            margin="normal"
          />
        </Box>

        <Grid container alignItems={"center"} direction="column">
          <Grid item sx={{ mt: 3 }}>
            <Box component={Link} to={"/Login"} sx={{ textDecoration: "none" }}>
              <Button sx={{ bgcolor: '#5b5f97' }} variant="contained">Register</Button>
            </Box>
          </Grid>
          <Grid item sx={{ mt: 3 }}>
            <Box component={Link} to={"/Login"} sx={{ textDecoration: "none" }}>
              <Button variant="text" sx={{ textTransform: "none" }}>
                {" "}
                Sudah Memiliki Akun? Login
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
