export function load({ cookies }) {
  return {
    c_user: cookies.get('username')
  }       
}