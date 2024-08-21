import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Typography,
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import styles from "./Form.module.css";

function Form() {
  //{ onSubmit }
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    ifDisability: false,
    workingYears: "",
    highestLevelOfSchooling: "",
    classOfImmigration: "",
    statusInCanada: "",
    yearsOfArrivalInCanada: "",
    needForLanguageSkillsImprovement: "",
    comfortReadingUnderstanding: "",
    comfortWritingCommunication: "",
    comfortVerbalCommunication: "",
    comfortMathAndNumeracy: "",
    comfortUsingComputersAndDigitalTech: "",
    location: "",
    numberOfChildrenUnder12: "",
    mainSourceOfIncome: "",
    monthlyIncome: "",
    totalSavings: "",
    housing: "",
    monthlyRentRatioFromTotalSavings: "",
    hasACar: false,
    monthlyTransportationFeeRatioFromTotalSavings: "",
    seriousnessOfMentalHealthProblem: "",
    substanceUseDisorder: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit(formData);

    // Here it would normally send the formData to backend
    // and get the probability and interventions in response
    // For this example, using mock data
    const mockResult = {
      probability: 75.5,
      interventions: [
        "Attend job skills workshop",
        "Participate in language improvement classes",
        "Join professional networking events",
      ],
    };
    // Navigate to the result page with the data
    navigate("/results", { state: mockResult });
  };

  const handleClearForm = () => {
    setFormData({
      age: "",
      gender: "",
      ifDisability: false,
      workingYears: "",
      highestLevelOfSchooling: "",
      classOfImmigration: "",
      statusInCanada: "",
      yearsOfArrivalInCanada: "",
      needForLanguageSkillsImprovement: "",
      comfortReadingUnderstanding: "",
      comfortWritingCommunication: "",
      comfortVerbalCommunication: "",
      comfortMathAndNumeracy: "",
      comfortUsingComputersAndDigitalTech: "",
      location: "",
      numberOfChildrenUnder12: "",
      mainSourceOfIncome: "",
      monthlyIncome: "",
      totalSavings: "",
      housing: "",
      monthlyRentRatioFromTotalSavings: "",
      hasACar: false,
      monthlyTransportationFeeRatioFromTotalSavings: "",
      seriousnessOfMentalHealthProblem: "",
      substanceUseDisorder: "",
    });
    localStorage.removeItem("formData");
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          className={styles.formTitle}
        >
          Candidate Form
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={2}>
            <TextField
              label="Age"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              // InputProps={{ inputProps: { min: 18, max: 65 } }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                label="Gender"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="M">Male</MenuItem>
                <MenuItem value="F">Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.ifDisability}
                  onChange={handleChange}
                  name="ifDisability"
                />
              }
              label="Disability"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Working Years"
              type="number"
              name="workingYears"
              value={formData.workingYears}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputProps={{ inputProps: { min: 0, max: 50 } }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel>Highest Level of Schooling</InputLabel>
              <Select
                name="highestLevelOfSchooling"
                value={formData.highestLevelOfSchooling}
                label="Highest Level of Schooling"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="High School Diploma">
                  High School Diploma
                </MenuItem>
                <MenuItem value="Associate's Degree">
                  Associate's Degree
                </MenuItem>
                <MenuItem value="Bachelor's Degree">Bachelor's Degree</MenuItem>
                <MenuItem value="Master's Degree">Master's Degree</MenuItem>
                <MenuItem value="Technical Certificate">
                  Technical Certificate
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Class of Immigration</InputLabel>
              <Select
                name="classOfImmigration"
                value={formData.classOfImmigration}
                label="Class of Immigration"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Express Entry">Express Entry</MenuItem>
                <MenuItem value="Family Sponsorship">
                  Family Sponsorship
                </MenuItem>
                <MenuItem value="Provincial Nominee">
                  Provincial Nominee
                </MenuItem>
                <MenuItem value="Study Permit">Study Permit</MenuItem>
                <MenuItem value="Work Permit">Work Permit</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Status in Canada</InputLabel>
              <Select
                name="statusInCanada"
                value={formData.statusInCanada}
                label="Status in Canada"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Citizen">Citizen</MenuItem>
                <MenuItem value="Permanent Resident">
                  Permanent Resident
                </MenuItem>
                <MenuItem value="Temporary Worker">Temporary Worker</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Years of Arrival in Canada"
              type="number"
              name="yearsOfArrivalInCanada"
              value={formData.yearsOfArrivalInCanada}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputProps={{ inputProps: { min: 0, max: 60 } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Need for Language Skills Improvement(0-10)"
              type="number"
              name="needForLanguageSkillsImprovement"
              value={formData.needForLanguageSkillsImprovement}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputProps={{ inputProps: { min: 0, max: 10 } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Comfort Reading Understanding(0-10)"
              type="number"
              name="comfortReadingUnderstanding"
              value={formData.comfortReadingUnderstanding}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputProps={{ inputProps: { min: 0, max: 10 } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Comfort Writing Communication(0-10)"
              type="number"
              name="comfortWritingCommunication"
              value={formData.comfortWritingCommunication}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputProps={{ inputProps: { min: 0, max: 10 } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Comfort Verbal Communication(0-10)"
              type="number"
              name="comfortVerbalCommunication"
              value={formData.comfortVerbalCommunication}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputProps={{ inputProps: { min: 0, max: 10 } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Comfort Math and Numeracy(0-10)"
              type="number"
              name="comfortMathAndNumeracy"
              value={formData.comfortMathAndNumeracy}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputProps={{ inputProps: { min: 0, max: 10 } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Comfort Using Computers and Digital Tech(0-10)"
              type="number"
              name="comfortUsingComputersAndDigitalTech"
              value={formData.comfortUsingComputersAndDigitalTech}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputProps={{ inputProps: { min: 0, max: 10 } }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControl fullWidth>
              <InputLabel>Location</InputLabel>
              <Select
                name="location"
                value={formData.location}
                label="Location"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Toronto Ontario">Toronto Ontario</MenuItem>
                <MenuItem value="Montreal Quebec">Montreal Quebec</MenuItem>
                <MenuItem value="Vancouver British Columbia">
                  Vancouver British Columbia
                </MenuItem>
                <MenuItem value="Calgary Alberta">Calgary Alberta</MenuItem>
                <MenuItem value="Ottawa Ontario">Ottawa Ontario</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              label="Number of Children Under 12"
              type="number"
              name="numberOfChildrenUnder12"
              value={formData.numberOfChildrenUnder12}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputProps={{ inputProps: { min: 0, max: 3 } }}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControl fullWidth>
              <InputLabel>Main Source of Income</InputLabel>
              <Select
                name="mainSourceOfIncome"
                value={formData.mainSourceOfIncome}
                label="Main Source of Income"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Employment">Employment</MenuItem>
                <MenuItem value="Savings">Savings</MenuItem>
                <MenuItem value="Government Assistance">
                  Government Assistance
                </MenuItem>
                <MenuItem value="Family Support">Family Support</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Monthly Income"
              type="number"
              name="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputProps={{ inputProps: { min: 0, max: 5000, step: "0.01" } }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Total Savings"
              type="number"
              name="totalSavings"
              value={formData.totalSavings}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputProps={{
                inputProps: { min: 1000, max: 50000, step: "0.01" },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel>Housing</InputLabel>
              <Select
                name="housing"
                value={formData.housing}
                label="Housing"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Buy">Buy</MenuItem>
                <MenuItem value="Rent">Rent</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.hasACar}
                  onChange={handleChange}
                  name="hasACar"
                />
              }
              label="Has a Car"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Monthly Rent Ratio From Total Savings"
              type="number"
              name="monthlyRentRatioFromTotalSavings"
              value={formData.monthlyRentRatioFromTotalSavings}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputProps={{ inputProps: { min: 0, max: 70, step: "0.01" } }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Monthly Transportation Fee Ratio From Total Savings"
              type="number"
              name="monthlyTransportationFeeRatioFromTotalSavings"
              value={formData.monthlyTransportationFeeRatioFromTotalSavings}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputProps={{ inputProps: { min: 0, max: 10, step: "0.001" } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Seriousness of Mental Health Problem"
              type="number"
              name="seriousnessOfMentalHealthProblem"
              value={formData.seriousnessOfMentalHealthProblem}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputProps={{ inputProps: { min: 0, max: 7 } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Substance Use Disorder</InputLabel>
              <Select
                name="substanceUseDisorder"
                value={formData.substanceUseDisorder}
                label="Substance Use Disorder"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Mild">Mild</MenuItem>
                <MenuItem value="Moderate">Moderate</MenuItem>
                <MenuItem value="Severe">Severe</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            container
            spacing={2}
            justifyContent="flex-end"
            style={{ marginTop: "20px" }}
          >
            <Grid item xs={12} sm={3}>
              <Button
                type="button"
                variant="outlined"
                color="secondary"
                onClick={handleClearForm}
                fullWidth
              >
                Clear Form
              </Button>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Form;
