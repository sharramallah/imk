import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CreationDrawer from "../component/CreationDrawer";
import Navbar from "../component/Navbar";

export default function CreateTask() {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <CreationDrawer />
      <Navbar halaman="Buat Tugas" />
      <Grid container direction="column">
        <Grid item>
          <Box sx={{ mt: 3, ml: 2.5 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#64b6ac" }}
            >
              {" "}
              Membuat Tugas!
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ mt: 1, ml: 2.5 }}>
            <Typography
              sx={{
                fontWeight: "light",
                fontSize: 15,
                color: "#64b6ac",
                fontWeight: "light",
              }}
            >
              {"Lorem ipsum dolor sit amet. "}
              Membuat Tugas!
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          mt: 2,
          backgroundColor: "#fee9e1",
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          border: "1px solid #64b6ac",
        }}
      >
        <Box sx={{ m: 3 }}>
          <Box>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Judul Tugas"
              variant="outlined"
              size="medium"
              margin="dense"
              sx={{
                mt: 5,
                color: "White",
              }}
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Judul Sub Tugas"
              // color="secondary"
              variant="outlined"
              size="medium"
              margin="dense"
              sx={{
                color: "White",
              }}
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              size="medium"
              margin="dense"
              type="date"
            />
          </Box>
          <Grid container direction="row">
            <Grid item xs={6}>
              <Box sx={{ mt: 1 }}>
                <TextField
                  id="time"
                  label="Jam Mulai"
                  type="time"
                  defaultValue="07:30"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                  sx={{ width: 150 }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ mt: 1 }}>
                <TextField
                  id="time"
                  label="Jam Berhenti"
                  type="time"
                  defaultValue="07:30"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                  sx={{ width: 150 }}
                />
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 1 }}>
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
          <Box sx={{ mt: 2 }}>
            <Box
              component={Link}
              to={"/taskdetail"}
              sx={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{ backgroundColor: "#64b6ac", color: "#fee9e1" }}
              >
                Simpan
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
