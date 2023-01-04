import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CreationDrawer from "../component/CreationDrawer";
import Navbar from "../component/Navbar";

export default function TaskDetail() {
  return (
    <Box sx={{ bgcolor: "#fffffb" }}>
      <CreationDrawer />
      <Navbar halaman="Lihat Tugas" />

      <Box>
        <Grid container alignItems={"center"} direction="column">
          <Grid item>
            <Box
              sx={{
                mt: 2,
                width: 350,
                height: 750,
              }}
            >
              <Grid container alignItems={"center"}>
                <Grid item>
                  <Box
                    sx={{
                      mt: 1,
                      ml: 2,
                      width: 318,
                      height: 130,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", mb: 1, color: "#5b5f97" }}
                    >
                      Tugas Yang Sudah Dikerjakan
                    </Typography>

                    <Divider sx={{ mt: 1, mb: 1 }}></Divider>

                    <Box
                      sx={{
                        borderRadius: 4,
                        backgroundColor: "#c6f991",
                        width: 318,
                        height: 125,
                      }}
                    >
                      <Grid container alignItems={"center"}>
                        <Grid item xs={6}>
                          <Typography
                            sx={{
                              fontSize: 19,
                              mt: 1,
                              fontWeight: "bold",
                              ml: 1,
                              align: "center",
                              color: "black",
                            }}
                          >
                            UI/UX
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography
                            sx={{ fontSize: 10, mt: 1, mr: 1, color: "black" }}
                            align="right"
                          >
                            Deadline: 12 September 2023
                          </Typography>
                        </Grid>
                      </Grid>
                      <Typography
                        sx={{
                          fontSize: 12,
                          mt: 0.5,
                          fontWeight: "bold",
                          ml: 1,
                          color: "black",
                        }}
                      >
                        "Membuat Wireframe Web"
                      </Typography>
                      <Typography
                        sx={{ fontSize: 10, ml: 1.2, color: "black" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Typography>
                      <Grid container alignItems={"center"}>
                        <Grid item>
                          <Box
                            sx={{
                              mt: 0.7,
                              ml: 28,
                              borderRadius: 4,
                              backgroundColor: "#64b6ac",
                              px: 2.5,
                              py: 0.4,
                            }}
                          >
                            <Box
                              component={Link}
                              to="/detailtask3"
                              sx={{ textDecoration: "none" }}
                            >
                              <Typography
                                sx={{
                                  fontSize: 12,
                                  fontWeight: "bold",
                                  color: "white",
                                  textAlign: "center",
                                }}
                              >
                                Detail
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                    <Box
                      sx={{
                        borderRadius: 4,
                        backgroundColor: "#c6f991",
                        width: 318,
                        height: 125,
                      }}
                    >
                      <Grid container alignItems={"center"}>
                        <Grid item xs={6}>
                          <Typography
                            sx={{
                              fontSize: 19,
                              mt: 1,
                              fontWeight: "bold",
                              ml: 1,
                              align: "center",
                              color: "black",
                            }}
                          >
                            UI/UX
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography
                            sx={{ fontSize: 10, mt: 1, mr: 1, color: "black" }}
                            align="right"
                          >
                            Deadline: 12 September 2023
                          </Typography>
                        </Grid>
                      </Grid>
                      <Typography
                        sx={{
                          fontSize: 12,
                          mt: 0.5,
                          fontWeight: "bold",
                          ml: 1,
                          color: "black",
                        }}
                      >
                        "Membuat Wireframe Web"
                      </Typography>
                      <Typography
                        sx={{ fontSize: 10, ml: 1.2, color: "black" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Typography>
                      <Grid container alignItems={"center"}>
                        <Grid item>
                          <Box
                            sx={{
                              mt: 0.7,
                              ml: 28,
                              borderRadius: 4,
                              backgroundColor: "#64b6ac",
                              px: 2.5,
                              py: 0.4,
                            }}
                          >
                            <Box
                              component={Link}
                              to="/detailtask3"
                              sx={{ textDecoration: "none" }}
                            >
                              <Typography
                                sx={{
                                  fontSize: 12,
                                  fontWeight: "bold",
                                  color: "white",
                                  textAlign: "center",
                                }}
                              >
                                Detail
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                    <Box
                      sx={{
                        borderRadius: 4,
                        backgroundColor: "#c6f991",
                        width: 318,
                        height: 125,
                      }}
                    >
                      <Grid container alignItems={"center"}>
                        <Grid item xs={6}>
                          <Typography
                            sx={{
                              fontSize: 19,
                              mt: 1,
                              fontWeight: "bold",
                              ml: 1,
                              align: "center",
                              color: "black",
                            }}
                          >
                            UI/UX
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography
                            sx={{ fontSize: 10, mt: 1, mr: 1, color: "black" }}
                            align="right"
                          >
                            Deadline: 12 September 2023
                          </Typography>
                        </Grid>
                      </Grid>
                      <Typography
                        sx={{
                          fontSize: 12,
                          mt: 0.5,
                          fontWeight: "bold",
                          ml: 1,
                          color: "black",
                        }}
                      >
                        "Membuat Wireframe Web"
                      </Typography>
                      <Typography
                        sx={{ fontSize: 10, ml: 1.2, color: "black" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Typography>
                      <Grid container alignItems={"center"}>
                        <Grid item>
                          <Box
                            sx={{
                              mt: 0.7,
                              ml: 28,
                              borderRadius: 4,
                              backgroundColor: "#64b6ac",
                              px: 2.5,
                              py: 0.4,
                            }}
                          >
                            <Box
                              component={Link}
                              to="/detailtask3"
                              sx={{ textDecoration: "none" }}
                            >
                              <Typography
                                sx={{
                                  fontSize: 12,
                                  fontWeight: "bold",
                                  color: "white",
                                  textAlign: "center",
                                }}
                              >
                                Detail
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
