import React from "react";
import { useStyles } from "./LoginFormStyles/LoginFormStyles";
import fedexbox from "../../gallery/fedexbox.jpg";

const LoginForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <p className={classes.header}>Login</p>
        <input
          type="text"
          required="true"
          placeholder="Username"
          className={classes.input}
        />

        <input
          type="text"
          required="true"
          placeholder="Password"
          className={classes.input}
        />
        <button type="submit" className={classes.submitBtn}>
          Submit
        </button>
      </form>
      <div className={classes.imgContainer}>
        <img src={fedexbox} alt="fedex box" className={classes.img} />
      </div>
    </div>
  );
};

export default LoginForm;
