import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Navbar from "../component/Navbar";
import Create from "../component/Create";
import CreationDrawer from "../component/CreationDrawer";
import { Box, Divider } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { fontWeight } from "@mui/system";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <Box
      sx={{
        backgroundColor: "#fee9e1",
        height: "100vh",
        // border: "3px solid black",
      }}
    >
      <CreationDrawer />
      <Navbar halaman="Dashboard" />

      <Grid container>
        <Grid>
          <Box mt={3} ml={3}>
            <Typography
              variant="h4"
              sx={{ color: "#64b6ac", fontWeight: "bold" }}
            >
              Semangat, Nur!
            </Typography>
          </Box>
        </Grid>
        <Box mt={1.5} mx={3}>
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: "light",
              textAlign: "justify",
              color: "#5b3e31",
            }}
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </Typography>
        </Box>
      </Grid>

      <Grid container alignItems={"center"} direction="column">
        <Grid item>
          <Box
            sx={{
              mt: 4,
              width: 350,
              height: 200,
              backgroundColor: "#64b6ac",
              borderRadius: 5,
            }}
          >
            <Grid
              container
              justifyContent={"space-between"}
              spacing={2}
              px={1.5}
            >
              <Grid item xs={6}>
                <Box sx={{ mt: 1, backgroundColor: "white", borderRadius: 4 }}>
                  <Typography
                    fontSize={90}
                    align="center"
                    color="#64b6ac"
                    fontWeight="regular"
                  >
                    21
                  </Typography>
                  <Typography
                    fontSize={14}
                    align="center"
                    color="#64b6ac"
                    fontWeight="light"
                  >
                    Total Semua Tugas
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Grid
                  height="100%"
                  container
                  direction={"column"}
                  justifyContent="space-between"
                >
                  <Grid item sx={{ flexGrow: 1 }}>
                    <Box sx={{ backgroundColor: "white", borderRadius: 3 }}>
                      <Typography
                        fontSize={40}
                        align="center"
                        color="#64b6ac"
                        fontWeight="regular"
                      >
                        7
                      </Typography>
                      <Typography
                        fontSize={10}
                        align="center"
                        color="#64b6ac"
                        fontWeight="light"
                      >
                        Total Tugas Selesai
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{
                        mt: 2,
                        backgroundColor: "white",
                        borderRadius: 3,
                      }}
                    >
                      <Typography
                        fontSize={40}
                        align="center"
                        color="#64b6ac"
                        fontWeight="regular"
                      >
                        14
                      </Typography>
                      <Typography
                        fontSize={10}
                        align="center"
                        color="#64b6ac"
                        fontWeight="light"
                      >
                        Total Tugas Belum Selesai
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Grid container direction="column">
        <Grid item>
          <Box
            sx={{
              ml: 2,
              mt: 2,
              width: 300,
              height: 60,
            }}
          >
            {" "}
            <Grid container alignItems={"center"}>
              <Grid item xs={1.8}>
                <Box>
                  <Create />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: 25,
                      mt: 1,
                      fontWeight: "bold",
                      ml: 2,
                      align: "center",
                      color: "#64b6ac",
                    }}
                  >
                    Buat Tugas
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid container alignItems={"center"} direction="column">
          <Grid item xs={6}>
            <Box
              sx={{
                mt: 1,
                width: 350,
                height: 180,
                backgroundColor: "#fad4c0",
                borderRadius: 4,
              }}
            >
              <List sx={{ width: "100%", maxWidth: 360 }}>
                <ListItem>
                  <Box
                    component={Link}
                    to={"/taskdetail2"}
                    sx={{ textDecoration: "none" }}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            fontSize: 18, //#b09e99 #fee9e1 #fad4c0 #64b6ac #c0fdfb
                            fontWeight: "bold",
                            color: "#5b3e31",
                          }}
                        >
                          Lihat Tugas Yang Belum Dikerjakan
                        </Typography>
                      }
                      secondary={
                        <Typography sx={{ fontSize: 15, color: "#64b6ac" }}>
                          09 Juli 2023
                        </Typography>
                      }
                    />
                  </Box>
                </ListItem>
                <Divider />
                <ListItem>
                  <Box
                    component={Link}
                    to={"/taskdetail"}
                    sx={{ textDecoration: "none" }}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#5b3e31",
                          }}
                        >
                          Lihat Tugas Yang Sudah Dikerjakan
                        </Typography>
                      }
                      secondary={
                        <Typography sx={{ fontSize: 15, color: "#64b6ac" }}>
                          09 Juli 2023
                        </Typography>
                      }
                    />
                  </Box>
                </ListItem>
                <Divider />
              </List>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
