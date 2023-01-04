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
        backgroundColor: "#fffffb",
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
              sx={{ color: "black", fontWeight: "bold" }}
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
              color: "#210440",
            }}
          >
            "Buat harimu produktif!"
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
              backgroundColor: "#5b5f97",
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
                <Box sx={{ mt: 1, backgroundColor: "#f9d181", borderRadius: 4 }}>
                  <Typography
                    fontSize={90}
                    align="center"
                    color="#210440"
                    fontWeight="regular"
                  >
                    21
                  </Typography>
                  <Typography
                    fontSize={14}
                    align="center"
                    color="#210440"
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
                    <Box sx={{ backgroundColor: "#bff981", borderRadius: 3 }}>
                      <Typography
                        fontSize={40}
                        align="center"
                        color="#210440"
                        fontWeight="regular"
                      >
                        7
                      </Typography>
                      <Typography
                        fontSize={10}
                        align="center"
                        color="#210440"
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
                        backgroundColor: "#ffabab",
                        borderRadius: 3,
                      }}
                    >
                      <Typography
                        fontSize={40}
                        align="center"
                        color="#210440"
                        fontWeight="regular"
                      >
                        14
                      </Typography>
                      <Typography
                        fontSize={10}
                        align="center"
                        color="#210440"
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
                      color: "#5b5f97",
                      width: 200
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
                // height: 180,
                // backgroundColor: "#f9d181",
                // borderRadius: 4,
              }}
            >
              <List sx={{ width: "100%", maxWidth: 360, padding: 0 }}>
                <ListItem sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, bgcolor: '#ffabab', borderTop: '1px solid black', borderRight: '1px solid black', borderLeft: '1px solid black' }}>
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
                    />
                  </Box>
                </ListItem>
                <Divider />
                <ListItem sx={{ bgcolor: '#bff981', borderBottomRightRadius: 10, borderBottomLeftRadius: 10, borderBottom: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }}>
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
                    />
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
