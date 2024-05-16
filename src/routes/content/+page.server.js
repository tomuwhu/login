var counter = 0
export function load({ cookies }) {
  var un = cookies.get('username')
  return {
    c_user: un,
    titkos_tartalom: `Hello ${un}, a számláló állása: ${counter++}`
  }       
}