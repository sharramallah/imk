import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Box sx={{ bgcolor: "#fee9e1", height: "100vh" }}>
      <Grid container justifyContent={"center"}>
        <Grid item>
          <Typography variant="h4" gutterBottom mt={20}>
            Login
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
            <Box
              component={Link}
              to={"/Dashboard"}
              sx={{ textDecoration: "none" }}
            >
              <Button variant="contained">Login</Button>
            </Box>
          </Grid>
          <Grid item sx={{ mt: 3 }}>
            <Box
              component={Link}
              to={"/Register"}
              sx={{ textDecoration: "none" }}
            >
              <Button variant="text" sx={{ textTransform: "none" }}>
                {" "}
                Belum Memiliki Akun? Register
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
