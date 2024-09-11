import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box, Card } from "@mui/material";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    console.log("ID:", id);
    console.log("Password:", password);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        {/* Card with elevation and custom height-to-width ratio */}
        <Card
          elevation={5}
          sx={{
            padding: 4,
            width: "100%",
            maxWidth: 350,
            maxHeight: 400,
          }}
        >
          {/* Decreased heading size */}
          <Typography
            variant="h5" // Heading size
            component="h1"
            gutterBottom
            align="center"
            sx={{
                marginBottom: 2, // Adjust this value to set your preferred bottom margin
                marginTop: 1, // Optional top margin
              }}
          >
            FO Admin Login
          </Typography>

          {/* ID TextField with placeholder */}
          <TextField
            id="id-field"
            label="User Name"
            variant="outlined"
            margin="dense"
            placeholder="Enter your username"
            fullWidth
            value={id}
            onChange={(e) => setId(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused': {
                borderColor: 'blue',
                '& fieldset': {
                  borderColor: 'blue',
                },
              },marginBottom: 1.5
            }}
          />

          {/* Password TextField with placeholder */}
          <TextField
            id="password-field"
            label="Password"
            variant="outlined"
            margin="dense"
            placeholder="Enter your password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused': {
                borderColor: 'blue',
                '& fieldset': {
                  borderColor: 'blue',
                },
              },
            }}
          />

          {/* Larger Login Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            fullWidth
            sx={{
              marginTop: 3,
              marginBottom:2,
              paddingY: 1.4, // Increases button height
              fontSize: "1.1rem", // Increases button text size
            }}
          >
            Login
          </Button>
        </Card>
      </Box>
    </Container>
  );
};

export default LoginForm;
