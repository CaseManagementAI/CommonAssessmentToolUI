import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';

// Function to generate and save PDF report
export const generatePDFReport = (formData, probability, interventions) => {
  const doc = new jsPDF();
  let yPos = 20;

  // Add title
  doc.setFontSize(20);
  doc.text('Return to Work Assessment Report', 105, yPos, { align: 'center' });
  yPos += 20;

  // Add client information
  doc.setFontSize(12);
  Object.entries(formData).forEach(([key, value]) => {
    doc.text(`${key.replace(/_/g, ' ')}: ${value}`, 20, yPos);
    yPos += 10;
    if (yPos > 280) {
      doc.addPage();
      yPos = 20;
    }
  });

  // Add probability
  doc.setFontSize(16);
  doc.text(`Probability of Return to Work: ${(probability * 100).toFixed(2)}%`, 20, yPos);
  yPos += 20;

  // Add interventions
  doc.setFontSize(14);
  doc.text('Recommended Interventions:', 20, yPos);
  yPos += 10;
  interventions.forEach((intervention, index) => {
    doc.setFontSize(12);
    doc.text(`${index + 1}. ${intervention}`, 30, yPos);
    yPos += 10;
    if (yPos > 280) {
      doc.addPage();
      yPos = 20;
    }
  });

  // Save the PDF
  doc.save('return_to_work_assessment_report.pdf');
};

// Function to generate and save CSV report
export const generateCSVReport = (formData, probability, interventions) => {
  let csvContent = 'data:text/csv;charset=utf-8,';

  // Add form data
  Object.entries(formData).forEach(([key, value]) => {
    csvContent += `${key},${value}\n`;
  });

  // Add probability
  csvContent += `probability,${probability}\n`;

  // Add interventions
  interventions.forEach((intervention, index) => {
    csvContent += `intervention_${index + 1},${intervention}\n`;
  });

  // Create a Blob with the CSV content
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

  // Save the CSV file
  saveAs(blob, 'return_to_work_assessment_report.csv');
};

// Function to handle report generation and saving
export const handleSaveReport = (format, formData, probability, interventions) => {
  if (format === 'pdf') {
    generatePDFReport(formData, probability, interventions);
  } else if (format === 'csv') {
    generateCSVReport(formData, probability, interventions);
  } else {
    console.error('Unsupported format');
  }
};