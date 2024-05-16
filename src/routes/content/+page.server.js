
export function load({ cookies }) {
  var un = cookies.get('username')
  return {
    c_user: un
  }       
}