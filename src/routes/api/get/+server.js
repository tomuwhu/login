import { global_counter } from '$lib/index.js'
export function GET({ url }) {
    global_counter.x++
    return new Response(JSON.stringify({x: 1, url, c: global_counter.x}))
}