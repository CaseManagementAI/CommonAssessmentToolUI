const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/submit-form', (req, res) => {
  const formData = req.body;
  
  // mock result for api post req testing
  // call backend url
  // backend will return a json back

  // match this to the current version of result 
  const result = {
    probability: Math.random() * 100,
    interventions: [
      "Attend job skills workshop: increased by xx%",
      "Participate in language improvement classes: increased by xx%",
      "Join professional networking events: increased by xx%"
    ]
  };
  // optional process of the result 
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});