import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Person2Icon from "@mui/icons-material/Person2";
import { bukaDrawerAtom } from "../kumpulanAtom";
import { useAtom } from "jotai";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function CreationDrawer() {
  const [bukaDrawer, setBukaDrawer] = useAtom(bukaDrawerAtom);

  const list = () => (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#5b5f97",
        // border: "2px solid black",
        height: "100vh",
      }}
      role="presentation"
      onClick={() => setBukaDrawer(false)}
      onKeyDown={() => setBukaDrawer(false)}
    >
      <Box
        sx={{
          mt: 3,
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          mb: 2,
          color: 'white'
        }}
      >
        c r e a t i o n
      </Box>
      <Divider />
      <List sx={{ mt: 1, fontSize: 30 }}>
        {["Beranda", "Lihat Tugas", "Laporan Tugas"].map((text, index) => (
          <Box
            key={text}
            component={Link}
            to={
              text === "Beranda"
                ? "/dashboard"
                : text === "Lihat Tugas"
                  ? "/taskdetail"
                  : "/report"
            }
            sx={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <ListItem disablePadding>
              <ListItemButton sx={{ mt: 3 }}>
                <List></List>
                <ListItemIcon sx={{ color: 'white' }}>
                  {text === "Beranda" ? <InboxIcon /> : ""}
                  {text === "Lihat Tugas" ? <MailIcon /> : ""}
                  {text === "Laporan Tugas" ? <MailIcon /> : ""}
                </ListItemIcon>
                <ListItemText
                  primary={<Typography fontSize={22}>{text}</Typography>}
                />
              </ListItemButton>
            </ListItem>
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor="left"
        open={bukaDrawer}
        onClose={() => setBukaDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
