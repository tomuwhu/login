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
    <h1>Bejelentkezés</h1>
    <form method="POST" action="/api?/login">
        <table>
            <tr>
                <td><label for="un">Felhasználónév</label></td>
                <td><input type="text" name="username" id="un"></td>
            </tr>
            <tr>
                <td><label for="pw">Jelszó</label></td>
                <td><input type="password" name="password" id="pw"></td>
            </tr>
            <tr>
                <td colspan="2" class=c><button>Login</button></td>
            </tr>
        </table>
    </form>
    <br><br>
{/if}
<style>
    table {
        margin: auto;
        border-spacing: 4px;
        box-shadow: 1px 1px 3px black;
        background-color: rgb(46, 96, 114);
        padding: 2px;
        border-radius: 10px;
    }
    td {
        padding: 8px;
        padding-left: 10px;
        padding-right: 15px;
        background-color: aliceblue;
        border-radius: 6px;
        box-shadow: 1px 1px 3px inset black;
        text-align: left;
    }
    td.c {
        text-align: center;
    }
    input {
        width: 100%;
        border: none;
        background: transparent;
        font-size: 13px;
        font-family: "Playfair Display", serif;
        font-optical-sizing: auto;
        border-bottom: solid 1px black;
    }
</style>