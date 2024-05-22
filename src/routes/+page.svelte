<script>
    export let data
</script>
{#if data?.c_user}
    <h1>Bejelentkezve</h1>
    {data.name}
    ({data.c_user})
    <form method="POST" action="/api?/logout">
        <br><br>
        <button>Logout</button>
    </form>
{:else}
    <form method="POST" action="/api?/login">
        <label for="un">Felhasználónév</label>
        <input type="text" name="username" id="un">
        <br>
        <label for="pw">Jelszó</label>
        <input type="password" name="password" id="pw">
        <button>Login</button>
    </form>
{/if}