import { global_counter } from '$lib/index.js'
export function GET({ url }) {
    global_counter.x++
    return new Response(JSON.stringify({dt: new Date(), url, c: global_counter.x}))
}