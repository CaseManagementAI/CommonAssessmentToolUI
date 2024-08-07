import React from "react";
import { Typography, Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleNewEntry = () => {
    navigate("/form");
  };

  const handleFileUpload = () => {
    // Placeholder for file upload functionality
    console.log("File upload functionality to be implemented");
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f7f7f7",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        textAlign="center"
        sx={{ mb: 4 }}
      >
        Intervention Predictor
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        textAlign="center"
        sx={{ mb: 6 }}
      >
        Know more about the candidate's employment potential and intervention
        recommendations
      </Typography>
      <Stack direction="row" spacing={4}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleNewEntry}
        >
          New Entry
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={handleFileUpload}
        >
          Upload PDF/CSV
        </Button>
      </Stack>
    </Box>
  );
}

export default LandingPage;
