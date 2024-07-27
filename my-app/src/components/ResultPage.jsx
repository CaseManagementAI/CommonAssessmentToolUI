import React from "react";
import {
  Typography,
  Button,
  Paper,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { probability, interventions } = location.state || {
    probability: 0,
    interventions: [],
  };

  const handleSaveReport = (format) => {
    // Implement save functionality here
    console.log(`Saving report in ${format} format`);
  };

  const handleBackToForm = () => {
    // Navigate back to the form without clearing the form data
    navigate("/");
  };

  return (
    <Box sx={{ p: 4, maxWidth: 800, margin: "0 auto" }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
          Return to Work Assessment Results
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Probability of Return to Work:
          </Typography>
          <Typography variant="h4" color="primary" sx={{ fontWeight: "bold" }}>
            {probability.toFixed(2)}%
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Recommended Interventions:
          </Typography>
          <List>
            {interventions.map((intervention, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={intervention}
                  primaryTypographyProps={{ variant: "body1" }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSaveReport("pdf")}
              fullWidth
            >
              Save as PDF
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleSaveReport("csv")}
              fullWidth
            >
              Save as CSV
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="outlined" onClick={() => navigate("/")} fullWidth>
              Back to Form
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ResultPage;
