const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
const salt = 10;

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
    database: 'konnect_db0',
});

db.connect(err => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to the database');
    }
});

app.get('/search', (req, res) => {
    const searchTerm = req.query.q;
    const query = `SELECT * FROM tests WHERE test_name LIKE '%${searchTerm}%'`;
    
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
    const query = `SELECT * FROM tests WHERE test_name LIKE '${startingLetter}%'`;
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

app.post('/register', (req, res) => {
    const values = req.body.gettestsby;
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
    
})

app.listen(process.env.PORT || 8081, () => {
    console.log("server running on port 8081");
})



