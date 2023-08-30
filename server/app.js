// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const jwt = require('jsonwebtoken');
// const bodyParser = require('body-parser');
// // const bcrypt = require('bcrypt');

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use(cookieParser())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
// const salt = 10;

// app.get("/", (req, res) => {
//     res.send("<h1>From Backend</h1>");
// })
// app.get("/post", (req, res) => {
//     res.send("<h1>This is post page</h1>");
// })

// // const db = mysql.createConnection({
// //     host: 'localhost',
// //     user: 'infocusr_konnect',
// //     password: '}%!Bv]J_FoJ5',
// //     database: 'infocusr_konnect'
// // });
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'konnect_db0',
// });

// db.connect(err => {
//     if (err) {
//         console.error('Database connection error:', err);
//     } else {
//         console.log('Connected to the database');
//     }
// });

// app.get('/gettests', (req, res) => {
//     const query = `SELECT * FROM tests`;
//     db.query(query, (error, results) => {
//         if (error) {
//           console.error(error);
//           res.status(500).json({ error: 'An error occurred' });
//         } else {
//           res.status(200).json(results);
//         }
//     });
// })

// app.get('/search', (req, res) => {
//     const searchTerm = req.query.q;
//     const query = `SELECT * FROM tests WHERE test_name LIKE '%${searchTerm}%'`;
    
//     db.query(query, (error, results) => {
//       if (error) {
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred' });
//       } else {
//         res.status(200).json(results);
//       }
//     });
//   });

// app.get('/getbyletter', (req, res) => {
//     const startingLetter = req.query.l;
//     const query = `SELECT * FROM tests WHERE test_name LIKE '${startingLetter}%'`;
//     db.query(query, (error, results) => {
//       if (error) {
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred' });
//       } else {
//         res.status(200).json(results);
//       }
//     });
//   });


// app.get('/orgsel', (req, res) => {
//     const selectedOrg = req.query.selectedorgan;
//     const query = 'SELECT * FROM tests WHERE category = ?';
  
//     db.query(query, [selectedOrg], (error, results) => {
//       if (error) {
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred' });
//       } else {
//         res.status(200).json(results);
//       }
//     });
//   });

// app.post('/register', (req, res) => {
//     const values = req.body.gettestsby;
//     db.query(sql, (err, results) => {
//         if (err) {
//             console.error('Database query error:', err);
//             return res.status(500).json({ error: 'Internal server error' });
//         }
//         const dbData = results;
//         return res.json({
//             "res": values.email + " emaill",
//             "db_data": dbData
//         });
//     });
    
// })

// app.listen(process.env.PORT || 8081, () => {
//     console.log("server running on port 8081");
// })




// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================





const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const salt = 10;
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
//     user: 'infocusr_newtestdb',
//     password: '6JcWb@$QTwtz',
//     database: 'infocusr_newtestdb'
// });

const db = mysql.createConnection({
    host: 'localhost',
    user: 'infocusr_konnect',
    password: '}%!Bv]J_FoJ5',
    database: 'infocusr_konnect'
});

db.connect(err => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to the database');
    }
});

app.post('/register', (req, res) => {
    const values = req.body.values;
    
    const sql = 'SELECT * FROM tests';
    // const sql = "INSERT INTO names (`name`) VALUES (?)";
    
    // db.query(sql, [values.name], (err, results) => {
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        const dbData = results;
        return res.json({
            "res": values.email + " emaill",
            "db_data": dbData
        });
    });
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
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shaikmahmoodsameer@gmail.com',
        pass: 'pjynvkillkvrshzn'
      }
    });
    
    const mailOptions = {
      from: name,
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

app.listen(process.env.PORT || 8081)

