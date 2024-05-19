import Database from 'better-sqlite3'
const db = new Database('mydb.db')
export function load({ cookies }) {
  var un = cookies.get('username')
  const res = db.prepare('SELECT * FROM users WHERE email = ?').get(un)
  return {
    c_user: cookies.get('username'),
    name: res?.name
  }       
}