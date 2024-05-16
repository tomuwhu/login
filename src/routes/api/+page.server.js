export const actions = {
	login: async ({ request, cookies, locals }) => {
        const data = await request.formData()
        var un = data.get('username')
        cookies.set('username', un, { path: '/' })
        locals.user = un
        locals.name = "Dr. Németh Tamás"
    },
    logout: async ({ cookies, locals }) => {
        cookies.delete('username', { path: '/' })
        locals.user = ''
    }
}

export async function load({ cookies, locals }) {
	return { c_user: cookies.get('username'), s_user: locals.user }
}