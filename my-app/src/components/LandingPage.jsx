import React from "react";
import { Typography, Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../img/bg1.jpg";

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
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "2rem",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            mb: 3,
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 500,
            color: "#2c3e50",
          }}
        >
          Intervention Recommendations
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            mb: 6,
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            color: "#34495e",
          }}
        >
          Learn more about the candidate's employment potential and intervention
          recommendations
        </Typography>
        <Stack direction="row" spacing={4} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            onClick={handleNewEntry}
            sx={{
              backgroundColor: "#3498db",
              "&:hover": {
                backgroundColor: "#2980b9",
              },
            }}
          >
            New Entry
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={handleFileUpload}
            sx={{
              borderColor: "#3498db",
              color: "#3498db",
              "&:hover": {
                borderColor: "#2980b9",
                color: "#2980b9",
              },
            }}
          >
            Upload PDF/CSV
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default LandingPage;
