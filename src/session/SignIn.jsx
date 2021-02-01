import { Box, TextField, Typography, Button } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { UiContext } from "../contexts/UiContext";
import auth from "../model/auth";

const SignIn = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { openSnackbar } = useContext(UiContext);
  // const [errors, setErrors] = useState([]);

  const handleChange = (event) => {
    const { target } = event;
    setInputs({
      ...inputs,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signIn(inputs.email, inputs.password);
    } catch (err) {
      openSnackbar(`Problem logging in: ${err.message}`);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Typography variant="h4" align="center" gutterBottom>
          Sign In
        </Typography>
        <TextField
          label="Email"
          name="email"
          type="email"
          value={inputs.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={inputs.password}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          margin="normal"
        >
          Sign In
        </Button>
      </Box>
    </form>
  );
};

export default SignIn;
