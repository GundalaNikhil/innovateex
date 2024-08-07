import React, { useState } from "react";
import {
  FormLabel,
  Grid,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useStyles } from "./HomeStyles/CreateVisitorStyles";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 800,
  margin: "auto",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const FormGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const CreateVisitorForm = () => {
  const classes = useStyles();

  const [visitorInfo, setVisitorInfo] = useState({
    firstName: "",
    lastName: "",
    visitorType: "",
    purposeVisit: "",
    entryDate: null,
    aadharNumber: "",
    mobileNumber: "",
    emailID: "",
    carryingLaptop: "",
  });

  const handleChange = (e) => {
    setVisitorInfo({
      ...visitorInfo,
      [e.target.name]: e.target.value,
    });
    console.log(visitorInfo);
  };

  const handleDateChange = (date) => {
    setVisitorInfo({
      ...visitorInfo,
      entryDate: date,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(visitorInfo);
  };

  return (
    <StyledCard elevation={3}>
      <CardContent>
        <Box className={classes.headerBox}>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            className={classes.title}
          >
            Visitor Form
          </Typography>
          <IconButton className={classes.closeIcon} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>
        <form onSubmit={handleSubmitForm}>
          <Grid container spacing={3}>
            <FormGrid item xs={12} sm={6}>
              <FormLabel className={classes.requiredLabel} required>
                First Name
              </FormLabel>
              <OutlinedInput
                id="firstName"
                name="firstName"
                type="name"
                placeholder="Nick"
                required
                fullWidth
                classes={{ root: classes.input }}
                onChange={handleChange}
              />
            </FormGrid>
            <FormGrid item xs={12} sm={6}>
              <FormLabel className={classes.requiredLabel} required>
                Last Name
              </FormLabel>
              <OutlinedInput
                id="lastName"
                name="lastName"
                type="name"
                placeholder="Fury"
                required
                fullWidth
                classes={{ root: classes.input }}
                onChange={handleChange}
              />
            </FormGrid>
            <FormGrid item xs={12} sm={6}>
              <FormLabel className={classes.requiredLabel} required>
                Type of Visitor
              </FormLabel>
              <Select
                fullWidth
                name="visitorType"
                value={visitorInfo.visitorType}
                onChange={handleChange}
              >
                <MenuItem value="guestVisitor">Guest Visitor</MenuItem>
                <MenuItem value="interview">Interview</MenuItem>
                <MenuItem value="delivery">Delivery</MenuItem>
              </Select>
            </FormGrid>
            <FormGrid item xs={12} sm={6}>
              <FormLabel className={classes.requiredLabel} required>
                Purpose of the Visit
              </FormLabel>
              <Select
                fullWidth
                name="purposeVisit"
                value={visitorInfo.purposeVisit}
                onChange={handleChange}
              >
                <MenuItem value="guestLecture">Guest Lecture</MenuItem>
                <MenuItem value="interview">Interview</MenuItem>
                <MenuItem value="delivery">Delivery</MenuItem>
              </Select>
            </FormGrid>
            <FormGrid item xs={12} sm={6}>
              <FormLabel className={classes.requiredLabel} required>
                Entry Date
              </FormLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={visitorInfo.entryDate}
                  onChange={handleDateChange}
                  renderInput={(params) => (
                    <OutlinedInput
                      {...params}
                      fullWidth
                      classes={{ root: classes.input }}
                    />
                  )}
                />
              </LocalizationProvider>
            </FormGrid>
            <FormGrid item xs={12} sm={6}>
              <FormLabel className={classes.requiredLabel} required>
                Aadhar Card Number
              </FormLabel>
              <OutlinedInput
                id="aadharNumber"
                name="aadharNumber"
                type="name"
                placeholder="1234 5678 9012"
                required
                fullWidth
                classes={{ root: classes.input }}
                onChange={handleChange}
              />
            </FormGrid>
            <FormGrid item xs={12} sm={6}>
              <FormLabel className={classes.requiredLabel} required>
                Mobile Number
              </FormLabel>
              <OutlinedInput
                id="mobileNumber"
                name="mobileNumber"
                type="number"
                placeholder="9876543210"
                required
                fullWidth
                classes={{ root: classes.input }}
                onChange={handleChange}
              />
            </FormGrid>
            <FormGrid item xs={12} sm={6}>
              <FormLabel className={classes.requiredLabel} required>
                Email ID
              </FormLabel>
              <OutlinedInput
                id="emailID"
                name="emailID"
                type="email"
                placeholder="abc@gmail.com"
                required
                fullWidth
                classes={{ root: classes.input }}
                onChange={handleChange}
              />
            </FormGrid>
            <FormGrid item xs={12} sm={6}>
              <FormLabel className={classes.requiredLabel} required>
                Carrying Laptop
              </FormLabel>
              <RadioGroup
                row
                name="carryingLaptop"
                value={visitorInfo.carryingLaptop}
                onChange={handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormGrid>
          </Grid>

          <Box display="flex" justifyContent="center">
            <StyledButton type="submit" variant="contained" color="primary">
              Submit
            </StyledButton>
          </Box>
        </form>
      </CardContent>
    </StyledCard>
  );
};

export default CreateVisitorForm;
