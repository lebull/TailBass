import { Box, TextField, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import { auth } from "../api/auth";

export const SignUp = () => {

    const [inputs, setInputs] = useState({email: '', password: ''});
    const [errors, setErrors] = useState([]);

    const handleChange = (event) => {
        const target = event.target;
        setInputs({
            ...inputs,
            [target.name]: target.type === 'checkbox' ? target.checked : target.value
        });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await auth.signUp(inputs.email, inputs.password);
        } catch(err) {
            console.error(err);
        }
    };

    return <form onSubmit={onSubmit}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
                <Typography variant="h4" align="center" gutterBottom>Sign Up</Typography>
                <TextField label="Email"name="email" type="email" value={inputs.email} onChange={handleChange} margin="normal" required/>
                <TextField label="Password" name="password" type="password" value={inputs.password} onChange={handleChange} margin="normal" required/>
                <Button type="submit" variant="contained" color="primary" margin="normal">Sign Up</Button>
            </Box>
        </form>
}