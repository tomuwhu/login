import Database from 'better-sqlite3'
const db = new Database('mydb.db')
export const actions = {
	login: async ({ request, cookies }) => {
        const data = await request.formData()
        var un = data.get('username')
        var pw = data.get('password')
        const res = db.prepare('SELECT * FROM users WHERE email = ? and password_hash = ?').get(un, pw)
        if (res?.email) cookies.set('username', res.email, { path: '/' })
        return { success: true }
    },
    logout: async ({ cookies }) => {
        cookies.delete('username', { path: '/' })
    }
}

export async function load({ cookies }) {
    var un = cookies.get('username')
    const res = db.prepare('SELECT * FROM users WHERE email = ?').get(un)
	return { c_user: un, name: res?.name }
}