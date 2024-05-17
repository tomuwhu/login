import { global_counter } from '$lib/index.js'
var counter = 0
export function load({ cookies }) {
  global_counter.x++
  var un = cookies.get('username')
  return {
    c_user: un,
    titkos_tartalom: `Hello ${un}, a számláló állása: ${counter++}`,
    gc: global_counter.x
  }       
}