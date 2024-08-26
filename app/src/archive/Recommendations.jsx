// Recommendations.js
import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

function Recommendations({ recommendations }) {
  return (
    <Card sx={{ maxWidth: 600, mt: 2, mx: "auto" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Recommended Interventions
        </Typography>
        <List>
          {recommendations.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText primary={item} />
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default Recommendations;
