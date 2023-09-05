const express = require('express');
const mysql = require('mysql');
require('dotenv').config();
const port = process.env.PORT;
const cors = require('cors');
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// const salt = 10;
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("<h1>From Backend</h1>");
})
app.get("/post", (req, res) => {
    res.send("<h1>This is post page</h1>");
})

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'infocusr_konnect',
//     password: '}%!Bv]J_FoJ5',
//     database: 'infocusr_konnect'
// });

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'konnect_db0'
});


db.connect(err => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to the database');
    }
});

app.post('/register', (req, res) => {
  try {
    const { name, email, password } = req.body.values;

    // Check if the email already exists in the database
    // const selectQuery = 'SELECT * FROM users WHERE email = ?';
    // db.query(selectQuery, [email], (selectErr, selectResults) => {
      // if (selectErr) {
      //   return res.status(500).json({ error: 'An error occurred while checking the email' });
      // }

      // if (selectResults.length > 0) {
      //   return res.status(400).json({ message: 'Email already exists' });
      // }

      // If the email doesn't exist, insert the user into the database
      const insQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
      db.query(insQuery, [name, email, password], (insertErr, insertResult) => {
        if (insertErr) {
          return res.status(500).json({ error: 'An error occurred while inserting into the database' });
        }

        res.status(201).json({ message: 'User registered successfully' });
      });
    // });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.get('/search', (req, res) => {
    const searchTerm = req.query.q;
    const query = `SELECT * FROM tests WHERE name LIKE '%${searchTerm}%'`;
    
    db.query(query, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      } else {
        res.status(200).json(results);
      }
    });
  });

app.get('/getbyletter', (req, res) => {
    const startingLetter = req.query.l;
    const query = `SELECT * FROM tests WHERE name LIKE '${startingLetter}%'`;
    db.query(query, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      } else {
        res.status(200).json(results);
      }
    });
  });


app.get('/orgsel', (req, res) => {
    const selectedOrg = req.query.selectedorgan;
    const query = 'SELECT * FROM tests WHERE category = ?';
  
    db.query(query, [selectedOrg], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      } else {
        res.status(200).json(results);
      }
    });
  });

app.post('/sendemail', async (req, res) => {
    const { firstName, lastName, email, mobileNumber, message, selectedTests} = req.body;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shaikmahmoodsameer@gmail.com',
        pass: 'pjynvkillkvrshzn'
      }
    });
    
    const mailOptions = {
      from: email,
      to: "shaikmahmoodsameer@gmail.com",
      subject: 'Konnect Booked Tests...',
      text: `Name: ${firstName + " " + lastName}\nEmail: ${email}\n ${mobileNumber}\n Message: ${message}\n Selected Items: ${selectedTests}`
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email...');
    }
  });

app.listen(process.env.PORT || 8081, () => {
  console.log("server app running on port: " + port);
})

