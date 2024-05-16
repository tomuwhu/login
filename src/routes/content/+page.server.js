export function load({ locals, cookies }) {
  return {
    c_user: cookies.get('username'),
    s_user: locals.user,
    s_name: locals.name
  }       
}