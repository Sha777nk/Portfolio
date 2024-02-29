const express = require('express');
const path = require('path');
const mongoose = require('mongoose'); // Import Mongoose
mongoose.set('strictQuery', true); // Set strictQuery to false

mongoose.connect('mongodb+srv://iamshashank008:StDAb8RmceVwFE8f@cluster0.zua6wmp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true
});

// StDAb8RmceVwFE8f
// iamshashank008

// Define a Mongoose schema for your form data
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  email_sub: String,
  message: String
});

// Create a Mongoose model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

app.post('/submitform', async (req, res) => {
  try {
    // Create a new document using the FormData model
    const formData = new FormData({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      email_sub: req.body.email_sub,
      message: req.body.message
    });

    // Save the document to the MongoDB database
    await formData.save();

    res.status(200).send('Form data submitted successfully.');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred while processing the form data.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
