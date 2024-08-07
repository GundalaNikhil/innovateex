import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  Modal,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PeopleIcon from "@mui/icons-material/People";
import { useStyles } from "./HomeStyles/HomeStyles";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import CreateVisitorForm from "./CreateVisitorForm";

const rows = [
  {
    id: 1,
    name: "Nikhil Gundala",
    category: "Visitor",
    visit: "Meeting",
    checkin: "10:00 AM",
    checkout: "11:00 AM",
  },
  {
    id: 2,
    name: "Nikhil Gundala",
    category: "Visitor",
    visit: "Meeting",
    checkin: "11:00 AM",
    checkout: "12:00 AM",
  },
];

const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [columns, setColumns] = useState([]);

  const drawerItems = [
    {
      text: "Manage Appointments",
      icon: <SettingsApplicationsIcon />,
      onClick: () => navigate("/appointments"),
    },
    {
      text: "Create Visitor Entry",
      icon: <PersonAddIcon />,
      onClick: () => setOpenModal(true),
    },
    {
      text: "Bulk Check-In",
      icon: <GroupAddIcon />,
      onClick: () => navigate("/checkin"),
    },
    {
      text: "Checkout Visitor",
      icon: <ExitToAppIcon />,
      onClick: () => navigate("/checkout"),
    },
    {
      text: "Manage Visitor",
      icon: <PeopleIcon />,
      onClick: () => navigate("/managevisitor"),
    },
  ];

  useEffect(() => {
    const baseColumns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "name", headerName: "Name", width: 130 },
      { field: "category", headerName: "Category", width: 130 },
      { field: "visit", headerName: "Purpose of Visit", width: 160 },
      { field: "checkin", headerName: "Check-In", width: 110 },
      { field: "checkout", headerName: "Check-Out", width: 110 },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: () => (
          <div className={classes.actionIcons}>
            <Tooltip title="View">
              <IconButton size="small">
                <RemoveRedEyeOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton size="small">
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Check-Out">
              <IconButton size="small">
                <CheckBoxOutlineBlankOutlinedIcon />
              </IconButton>
            </Tooltip>
          </div>
        ),
      },
    ];
    setColumns(baseColumns);
  }, [isMobile, classes.actionIcons]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
      className={classes.drawerList}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className={classes.drawerHeader}>
        <Typography variant="h6">Menu</Typography>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        {drawerItems.map((item, index) => (
          <ListItem button key={item.text} onClick={item.onClick}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} className={classes.drawerText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box className={classes.root}>
      <div className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            FedEx Lobby
          </Typography>
          <IconButton>
            <Avatar alt="user" />
          </IconButton>
        </Toolbar>
      </div>
      <Drawer
        anchor={"left"}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        classes={{
          paper: isMobile ? classes.fullScreenDrawer : classes.drawerPaper,
        }}
      >
        {drawerList()}
      </Drawer>
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.dataGrid}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            disableSelectionOnClick
          />
        </div>
      </Container>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <CreateVisitorForm />
      </Modal>
    </Box>
  );
};

export default HomePage;
