import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  rootContainer: {
    [theme.breakpoints.up("xs")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
  },
  card: {
    maxWidth: 800,
    margin: "auto",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  title: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  headerBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  closeIcon: {
    position: "absolute",
    top: -10,
    right: "left",
    cursor: "pointer",
  },
  formGrid: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
  },
  input: {
    borderRadius: theme.shape.borderRadius,
    "& .MuiOutlinedInput-root": {
      borderRadius: "10%",
    },
    "& .MuiSelect-root": {
      borderRadius: "100px",
    },
    "& .MuiInputBase-root": {
      borderRadius: "100%",
    },
  },
  requiredLabel: {
    marginBottom: theme.spacing(1),
    "& .MuiFormLabel-asterisk": {
      color: theme.palette.error.main,
    },
  },

  submitButton: {
    marginTop: theme.spacing(3),
  },
}));
