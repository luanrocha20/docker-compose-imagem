const express = require("express");
const mysql = require("mysql2");

const app = express();

const config = {
  host: "mysql",
  user: "root",
  password: "root",
  database: "nodedb",
};

const connection = mysql.createConnection(config);

connection.query(
  `CREATE TABLE IF NOT EXISTS people (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255)
    )`,
);

const names = ["Wescley", "Luiz", "Luan", "Maria", "João", "Ana", "Carlos"];

app.get("/", (req, res) => {
  const randomName = names[Math.floor(Math.random() * names.length)];

  connection.query(`INSERT INTO people(name) VALUES(?)`, [randomName]);

  connection.query(`SELECT name FROM people`, (err, results) => {
    let html = "<h1>Full Cycle Rocks!</h1>";

    html += "<ul>";

    results.forEach((p) => {
      html += `<li>${p.name}</li>`;
    });

    html += "</ul>";

    res.send(html);
  });
});

app.listen(3000, () => {
  console.log("Node running");
});
