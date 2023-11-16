const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");




const dbOpen = {
async  openDb () {
  return sqlite.open({
    filename: './database.db',
    driver: sqlite3.Database
  })
}

}

module.exports = dbOpen;


