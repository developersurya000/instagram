import express from 'express';
const app = express();
import cors from 'cors';
app.use(cors());
app.use(express.json());
import mysql, { createConnection } from 'mysql';

const instauserformat = /^[a-zA-Z0-9._]{1,30}$/;

const db = createConnection({
  host: "localhost",
  user: "root",
  password: "2580",
  database: "instagram"
});


app.listen(4040, () => {
  console.log("Server started......");
});

app.get('/', (req, res) => {
  db.query('SELECT * FROM register', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = "INSERT INTO register (username, password) VALUES (?, ?)";
  
  db.query(sql, [username, password], (err, data) => {
    if (err) {
      res.json({ status: "server error" });
      console.log(err);
    } else {
      if (instauserformat.test(username) === true) {
        res.json({ status: "success" });
      } else {
        res.json({ status: "invalid username!" });
      }
    }
  });
});
