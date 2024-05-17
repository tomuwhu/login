import Database from 'better-sqlite3'
const db = new Database('mydb.db')
import { global_counter } from '$lib/index.js'
var counter = 0
export function load({ cookies }) {
  global_counter.x++
  var un = cookies.get('username')
  const res = db.prepare('SELECT * FROM users').all()
  return {
    c_user: un, res, 
    titkos_tartalom: `Hello ${un}, a számláló állása: ${counter++}`,
    gc: global_counter.x
  }       
}