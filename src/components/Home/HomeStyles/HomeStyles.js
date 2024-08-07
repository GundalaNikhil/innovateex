import { purple } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  appBar: {
    backgroundColor: purple[700],
    color: theme.palette.common.white,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white",
  },
  title: {
    flexGrow: 1,
    color: "white",
    display: "flex",
    justifyContent: "center",
    fontSize: "1.2rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
  },
  container: {
    flexGrow: 1,
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3),
    },
  },
  dataGrid: {
    height: "calc(100vh - 120px)",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      height: "calc(100vh - 150px)",
    },
  },
  drawerList: {
    width: "100%",
  },
  drawerPaper: {
    width: 400,
  },
  fullScreenDrawer: {
    width: "100%",
  },
  drawerText: {
    fontSize: "0.9rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
  },
  actionIcons: {
    display: "flex",
    gap: theme.spacing(1),
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));
