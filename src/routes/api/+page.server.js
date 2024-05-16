export const actions = {
	login: async ({ request, cookies }) => {
        const data = await request.formData()
        var un = data.get('username')
        cookies.set('username', un, { path: '/' })
    },
    logout: async ({ cookies }) => {
        cookies.delete('username', { path: '/' })
    }
}

export async function load({ cookies }) {
	return { c_user: cookies.get('username') }
}